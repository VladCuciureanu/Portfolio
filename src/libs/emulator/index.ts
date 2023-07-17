import { GameBoyAdvanceKey } from "./constants";
import mGBA from "./wasm/mgba";

export class mGBAEmulator {
  module: mGBAModule;
  isPaused!: boolean;
  isRunning!: boolean;
  savePath!: string;
  romPath!: string;
  cheatsPath!: string;
  saveStatePath!: string;

  constructor() {
    this.isPaused = false;
    this.isRunning = false;
    this.savePath = "/data/saves/";
    this.romPath = "/data/games/";
    this.cheatsPath = "/data/cheats/";
    this.saveStatePath = "/data/states";
    this.module = mGBA().then(function (Module: mGBAModule) {
      Module.canvas = document
        .getElementsByTagName("canvas")
        .namedItem("canvas")!;
      Module.FSInit();
      return Module;
    });
  }

  // interface for emulators:
  // required methods
  run(file: File, callback: Function | null = null) {
    var reader = new FileReader();
    var that = this;
    reader.onload = function (e: ProgressEvent<FileReader>) {
      that.isRunning = that.loadBuffer(
        file.name,
        e.target?.result as ArrayBuffer
      );
      if (callback) {
        callback(that.isRunning);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  loadSave(file: File) {
    var reader = new FileReader();
    var that = this;
    reader.onload = function (e: ProgressEvent<FileReader>) {
      that.writeSav(file.name, e.target?.result as ArrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  }

  loadCheatsFile(file: File) {
    var reader = new FileReader();
    var that = this;
    reader.onload = function (e: ProgressEvent<FileReader>) {
      that.writeCheats(file.name, e.target?.result as ArrayBuffer);
      if (that.isRunning) {
        that.module.autoLoadCheats();
      }
    };
    reader.readAsArrayBuffer(file);
  }

  parseCheatsString(cheatsStr: string) {
    // only libretro cheats format is supported at this time
    return this.parseCheatsStringLibRetro(cheatsStr);
  }

  // parses libretro cheats format input as string
  // returns object where each key is a cheat of the
  // output: { <cheat #>: {desc: "<your description>", enable: true|false, code: "<cheat code>"} ...}
  parseCheatsStringLibRetro(cheatsStr: string) {
    const lines = cheatsStr.split("\n");

    if (!lines[0].match("^cheats = [0-9]+")) {
      return false;
    }

    let parsedCheats: Record<string, Record<string, string>> = {};
    for (const cheatLine of lines) {
      if (cheatLine.startsWith("cheats = ") || cheatLine === "") {
        continue;
      }

      const match = cheatLine.match(
        /^cheat([0-9]+)_([a-zA-Z]+)\s*=\s*"?([a-zA-Z0-9\s\+:_]+)"?$/
      );

      if (match) {
        const cheatNumber = match[1];
        const cheatType = match[2];
        const cheatValue = match[3];

        if (parsedCheats[cheatNumber]) {
          parsedCheats[cheatNumber][cheatType] = cheatValue;
        } else {
          parsedCheats[cheatNumber] = {};
          parsedCheats[cheatNumber][cheatType] = cheatValue;
        }
      }
    }

    return parsedCheats;
  }

  getCurrentCheatsFile() {
    let cheatsName = this.filepathToFileName(this.module.gameName, ".cheats");

    try {
      return this.module.FS.readFile(this.cheatsPath + cheatsName);
    } catch {
      return null;
    }
  }

  getCurrentCheatsFileName() {
    return this.filepathToFileName(this.module.gameName, ".cheats");
  }

  createSaveState(slot: number) {
    return this.module.saveState(slot);
  }

  loadSaveState(slot: number) {
    return this.module.loadState(slot);
  }

  listSaveStates() {
    return this.module.FS.readdir(this.saveStatePath);
  }

  deleteSaveState(slot: string) {
    let saveStateName = this.filepathToFileName(
      this.module.saveName,
      ".ss" + slot
    );
    const saveStatePath = this.saveStatePath + "/" + saveStateName;

    this.module.FS.unlink(saveStatePath);
  }

  pause() {
    this.isPaused = true;
    this.module.pauseGame();
  }

  resume() {
    this.isPaused = false;
    this.module.resumeGame();
  }

  getPaused() {
    return this.isPaused;
  }

  getIsRunning() {
    return this.isRunning;
  }

  setVolume(percent_value: number) {
    this.module.setVolume(percent_value);
  }

  getVolume() {
    return this.module.getVolume();
  }

  reset() {
    this.quitGame();
    this.isRunning = false;
    return false; //always returns without exception
  }

  quickReload() {
    if (this.isRunning) {
      // reset core based on active save+rom
      this.module.quickReload();
    } else if (this.module.gameName) {
      // try to load the current save/rom name if present in filesystem
      var res = this.module.loadGame(this.module.gameName);
    } else {
      // network reload required
      return false;
    }
    return true;
  }

  downloadSave(filename: any) {
    //purely for compatability
    // var save = this.module.getSave();
    // if (window.URL && save) {
    // var a = $("<a style='display: none;'/>");
    // var url = window.URL.createObjectURL(
    // new Blob([save], { type: "data:application/x-spss-sav" })
    // );
    // a.attr("href", url);
    // a.attr("download", filename);
    // $("body").append(a);
    // a[0].click();
    // window.URL.revokeObjectURL(url);
    // a.remove();
    // }
  }

  getCurrentSave() {
    return this.module.getSave();
  }

  enableKeyboardInput() {
    this.module.toggleInput(true);
  }

  disableKeyboardInput() {
    this.module.toggleInput(false);
  }

  simulateKeyDown(keyId: GameBoyAdvanceKey) {
    this.module.buttonPress(keyId);
  }

  simulateKeyUp(keyId: GameBoyAdvanceKey) {
    this.module.buttonUnpress(keyId);
  }

  remapKeyBinding(
    name: string,
    keyBindingCode: string,
    keybindingName: string
  ) {
    keybindingName = keybindingName.replace(/arrow/gi, ""); //mgba arrow bindings use up, down, left, right
    //handle edge cases
    // enter is named Return in emscripten SDL key mapping
    if (keybindingName === "Enter") {
      keybindingName = "Return";
    }
    // input is trimmed, rely on keycode for space
    if (keyBindingCode === "32") {
      keybindingName = "Space";
    }

    if (keybindingName && name) {
      this.module.bindKey(keybindingName, name);
    }
  }

  setFastForward(mode: number, value: number) {
    this.module.setMainLoopTiming(mode, value);
  }

  // we use a webgl canvas context for mgba, implying
  // that we need to re-render and immediately after
  // copy the canvas to avoid an empty buffer
  _copyCanvas() {
    var resizedCanvas = document.createElement("canvas");
    resizedCanvas.classList.add("pixelatedCanvas");

    var resizedContext = resizedCanvas.getContext("2d")!;
    //@ts-ignore
    resizedContext.mozImageSmoothingEnabled = false;
    //@ts-ignore
    resizedContext.webkitImageSmoothingEnabled = false;
    //@ts-ignore
    resizedContext.msImageSmoothingEnabled = false;
    resizedContext.imageSmoothingEnabled = false;

    const screenWrapper = document.querySelector("#screenwrapper");
    resizedCanvas.height = screenWrapper!.clientHeight!;
    resizedCanvas.width = screenWrapper!.clientWidth!;

    var screen = (document.getElementById(
      "screen"
    ) as HTMLCanvasElement)!.getContext("webgl")!.canvas!;

    resizedContext.drawImage(
      screen,
      0,
      0,
      resizedCanvas.width,
      resizedCanvas.height
    );

    let data = resizedCanvas.toDataURL();
    let image = new Image();
    image.src = data;
    let w = window.open("");
    w!.document.write(image.outerHTML);
  }

  // pass the function to copy the canvas to the c code, this
  // will be called immediately after filling the canvas buffers
  screenShot() {
    this.module.screenShot(this._copyCanvas);
  }

  // Note: this solution is not accurate for all keyboard layouts
  defaultKeyBindings() {
    return [
      { descrip: "Up", keybind: "Up" },
      { descrip: "Down", keybind: "Down" },
      { descrip: "Left", keybind: "Left" },
      { descrip: "Right", keybind: "Right" },
      { descrip: "A", keybind: "X" },
      { descrip: "B", keybind: "Z" },
      { descrip: "L", keybind: "A" },
      { descrip: "R", keybind: "S" },
      { descrip: "Start", keybind: "Enter" },
      { descrip: "Select", keybind: "Backspace" },
    ];
  }

  // optional methods
  quitGame() {
    this.module.quitGame();
    this.isPaused = false;
    this.isRunning = false;
  }

  quitEmulator() {
    this.module.quitMgba();
    this.isPaused = false;
    this.isRunning = false;
  }

  // chrome will pause audio due to their autoplay policy changes
  // this is a simple way around this, this function will resume the
  // audio context and should be used within a user gesture
  audioPolyfill(callback: Function | null = null) {
    if (
      typeof this.module === "undefined" ||
      typeof this.module.SDL2 == "undefined" ||
      typeof this.module.SDL2.audioContext == "undefined"
    )
      return;
    if (this.module.SDL2.audioContext.state == "suspended") {
      this.module.SDL2.audioContext.resume();
    }
    if (this.module.SDL2.audioContext.state == "running" && callback) {
      // run user provided callback, usually for removing gesture
      callback();
    }
  }

  // this function was generated with chatgpt
  // simple fade to background color
  lcdFade() {
    let canvas = this.module.canvas!;
    let gl = canvas.getContext("webgl")!;

    gl.viewport(0, 0, canvas.width, canvas.height);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      canvas.width,
      canvas.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );

    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );

    // Use a smaller vertex buffer with just 4 vertices (two triangles)
    const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    const pixels = new Uint8Array(canvas.width * canvas.height * 4);
    gl.readPixels(
      0,
      0,
      canvas.width,
      canvas.height,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    );

    const computedStyle = getComputedStyle(canvas);
    const bgColor = computedStyle.backgroundColor;
    const bgColorComponents = bgColor.match(/\d+/g)!;
    const bgR = parseInt(bgColorComponents[0]) / 255;
    const bgG = parseInt(bgColorComponents[1]) / 255;
    const bgB = parseInt(bgColorComponents[2]) / 255;

    for (let i = 3; i < pixels.length; i += 4) {
      pixels[i] = Math.max(0, pixels[i] - 10);
      pixels[i - 3] = Math.round((1 - pixels[i] / 255) * bgR * 255);
      pixels[i - 2] = Math.round((1 - pixels[i] / 255) * bgG * 255);
      pixels[i - 1] = Math.round((1 - pixels[i] / 255) * bgB * 255);
    }

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      canvas.width,
      canvas.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // Draw the faded image using the same smaller vertex buffer
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  //EnableDebug() {
  //
  //}

  // Helpers
  writeSav(name: string, buffer: ArrayBuffer) {
    var res = this.module.FS.writeFile(
      this.savePath + name,
      new Uint8Array(buffer)
    );
    return res;
  }

  writeCheats(name: string, buffer: ArrayBuffer) {
    var res = this.module.FS.writeFile(
      this.cheatsPath + name,
      new Uint8Array(buffer)
    );
    return res;
  }

  loadBuffer(name: string, buffer: ArrayBuffer) {
    var filepath = this.romPath + name;
    this.module.FS.writeFile(filepath, new Uint8Array(buffer));
    var res = this.module.loadGame(filepath);

    return res;
  }

  filepathToFileName(path: string, withExtension: string | null = null) {
    let fileName = path.split("/").pop();

    if (withExtension) {
      const ext = "." + fileName?.split(".").pop();
      fileName = fileName?.replace(ext, withExtension);
    }

    return fileName;
  }
}

type mGBAModule = {
  FS: typeof FS;
  FSInit(): void;
  gameName: string;
  saveName: string;
  autoLoadCheats(): boolean;
  saveState(slot: number): boolean;
  loadState(slot: number): boolean;
  pauseGame(): void;
  resumeGame(): void;
  setVolume(percent_value: number): void;
  getVolume(): number;
  quickReload(): void;
  loadGame(gameName: string): boolean;
  getSave(): string;
  toggleInput(arg0: boolean): void;
  buttonPress(keyId: string): void;
  buttonUnpress(keyId: string): void;
  bindKey(keybindingName: string, name: string): void;
  setMainLoopTiming(mode: number, value: number): number;
  screenShot(_copyCanvas: () => void): void;
  quitGame(): void;
  quitMgba(): void;
  SDL2: any;
  canvas: HTMLCanvasElement | null;
};

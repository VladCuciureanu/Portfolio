import { mGBAEmulator } from "@/libs/emulator";
import { GameBoyAdvanceKey } from "@/libs/emulator/constants";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

export const InitialEasterEggState: EasterEggState = {
  emulator: null,
  isPowered: false,
  volume: 50,
  pressedKeys: [],
  setIsPowered: () => {},
  setVolume: () => {},
  setPressedKeys: () => {},
};

export const EasterEggContext = createContext(InitialEasterEggState);

export default function EasterEggProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [emulator, initEmulator] = useState<mGBAEmulator | null>(null);
  const [isPowered, setIsPowered] = useState(InitialEasterEggState.isPowered);
  const [volume, setVolume] = useState(InitialEasterEggState.volume);
  const [pressedKeys, setPressedKeys] = useState(
    InitialEasterEggState.pressedKeys
  );

  useEffect(() => {
    if (isPowered) {
      const _emulator = new mGBAEmulator();
      fetch("/assets/binaries/zelda_minish.gba")
        .then((res) => res.arrayBuffer())
        .then((buffer) => _emulator.loadBuffer("zelda", buffer))
        .then(() => initEmulator(_emulator))
        .then(() => {
          _emulator.setVolume(volume / 100);
        })
        .then(() => {});
    } else {
      stopEmulation();
    }
  }, [isPowered]);

  const stopEmulation = () => {
    emulator?.quitGame();
    initEmulator(null);
  };

  useEffect(() => {
    emulator?.setVolume(volume / 100);
  }, [volume]);

  return (
    <EasterEggContext.Provider
      value={{
        emulator,
        isPowered,
        volume,
        pressedKeys,
        setIsPowered,
        setVolume,
        setPressedKeys,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
}

type EasterEggState = {
  volume: number;
  isPowered: boolean;
  pressedKeys: GameBoyAdvanceKey[];
  setVolume: Function;
  setIsPowered: Function;
  setPressedKeys: Function;
  emulator: mGBAEmulator | null;
};

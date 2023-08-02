import React from "react";
import EasterEggProvider from "./Context";
import EasterEggCanvas from "./Canvas";

export default function GameBoy() {
  return (
    <EasterEggProvider>
      <EasterEggCanvas />
    </EasterEggProvider>
  );
}

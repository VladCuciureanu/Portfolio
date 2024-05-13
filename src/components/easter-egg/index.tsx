import { ComponentProps } from "react";
import EasterEggCanvas from "./canvas";
import EasterEggProvider from "./context";

export default function GameBoy(props: ComponentProps<"div">) {
  return (
    <EasterEggProvider>
      <EasterEggCanvas {...props} />
    </EasterEggProvider>
  );
}

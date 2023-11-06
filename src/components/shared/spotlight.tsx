import { ComponentProps } from "react";

export default function Spotlight(props: ComponentProps<"div">) {
  return (
    <div {...props} className="__variable_20b187 group/spotlight relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute bg-spotlight" />
      {props.children}
    </div>
  );
}

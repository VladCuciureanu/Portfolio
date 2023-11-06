import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Section(props: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={twMerge(
        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}

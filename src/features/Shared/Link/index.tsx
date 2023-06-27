import { ComponentProps } from "react";
import NextJSLink from "next/link";
import cn from "@/utils/class-names";
import styles from "./index.module.scss";

export default function Link(props: ComponentProps<typeof NextJSLink>) {
  return (
    <NextJSLink
      className={
        props.className ? cn(props.className, styles.Link) : styles.Link
      }
      {...props}
    >
      {props.children}
    </NextJSLink>
  );
}

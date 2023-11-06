import NextLink from "next/link";
import { ComponentProps } from "react";

export default function OptionalLink(
  props: Omit<ComponentProps<typeof NextLink>, "href"> & { href?: string },
) {
  if (props.href === undefined) {
    return <div>{props.children}</div>;
  }

  return (
    <NextLink href={props.href!} {...props}>
      {props.children}
    </NextLink>
  );
}

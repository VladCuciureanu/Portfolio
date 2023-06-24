import Link from "next/link";
import { ReactNode } from "react";
import styles from "./index.module.scss";
import cn from "@/utils/class-names";

type HeaderLinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
};

export default function HeaderLink(props: HeaderLinkProps) {
  const classNames = props.external
    ? cn(styles.Link, styles.ExternalLink)
    : styles.Link;
  return (
    <Link className={classNames} href={props.href}>
      {props.children}
    </Link>
  );
}

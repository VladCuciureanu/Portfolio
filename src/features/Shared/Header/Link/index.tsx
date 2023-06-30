import Link from "next/link";
import { ReactNode } from "react";
import styles from "./index.module.scss";
import cn from "@/utils/class-names";
import * as Tooltip from "@radix-ui/react-tooltip";

type HeaderLinkProps = {
  children: ReactNode;
  href: string;
  tooltip: string;
  external?: boolean;
  prefetch?: boolean;
};

export default function HeaderLink(props: HeaderLinkProps) {
  const classNames = props.external
    ? cn(styles.Link, styles.ExternalLink)
    : styles.Link;
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link
            className={classNames}
            href={props.href}
            prefetch={props.prefetch}
          >
            {props.children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.Tooltip} sideOffset={5}>
            {props.tooltip}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

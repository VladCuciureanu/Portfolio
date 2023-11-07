import { ReactNode } from "react";

export type Project = {
  label: string;
  href: string;
  year: number;
  showcase?: {
    orderId: number;
    imgSrc?: string;
    description: ReactNode;
  };
  decorations?: {
    stars?: string;
    forks?: string;
    downloads?: string;
  };
  tags: string[];
};

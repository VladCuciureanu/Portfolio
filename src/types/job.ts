import { ReactNode } from "react";

export type Job = {
  position: string;
  company: {
    name: string;
    href?: string;
  };
  description: ReactNode;
  links?: {
    label: string;
    href: string;
  }[];
  startDate: Date;
  endDate?: Date;
  tags: string[];
};

import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    href: z.string().url().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
});

const sideProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    href: z.string().url().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    showcaseIdx: z.number().optional(),
  }),
});

export const collections = { jobs, sideProjects };

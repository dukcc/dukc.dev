import { date } from "astro/zod";
import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    date: z.string(),
    description: z.string(),
    featured: z.boolean(),
  }),
});

const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    date: z.string(),
    description: z.string(),
    featured: z.boolean(),
  }),
});
export const collections = {
  project: projectCollection,
  journal: journalCollection,
};

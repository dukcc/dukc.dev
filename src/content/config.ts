import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    date: z.string(),
    images: z.array(z.string()),
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
  }),
});
export const collections = {
  project: projectCollection,
  journal: journalCollection,
};

// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: z.union([image(), z.string()]),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Astroship"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      description: z.string(),
      avatar: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      groups: z.array(z.string()),
    }),
});

const missionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    location: z.string(),
    species: z.string(),
    year: z.number(),
    author: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
  missions: missionsCollection,
};

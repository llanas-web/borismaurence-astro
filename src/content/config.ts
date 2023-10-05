import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    source: z.string().optional(),
    skills: z.array(reference("skills")),
    heroImage: z.string().optional(),
    isPrivate: z.boolean().optional(),
  }),
});

const skills = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    logo: z.string(),
    type: z.enum(["framework", "language", "tools"]),
  }),
});

export const collections = { blog, projects, skills };

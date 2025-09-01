import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  category: z.string().optional(),
  status: z.string().optional(),
  tech: z.array(z.string()).optional(),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  lead: z.string().optional(),
  funding: z.string().optional(),
  startDate: z.coerce.date().optional(),
});

export const publicationSchema = z.object({
  title: z.string().min(2),
  authors: z.array(z.string()).default([]),
  abstract: z.string().optional(),
  doi: z.string().optional(),
  url: z.string().url().optional(),
  publishedAt: z.coerce.date().optional(),
});

export const labSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  description: z.string().optional(),
  focus: z.array(z.string()).default([]),
  stats: z
    .object({
      projects: z.number().optional(),
      researchers: z.number().optional(),
      publications: z.number().optional(),
    })
    .optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export const applicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  institution: z.string().optional(),
  researchArea: z.string().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  whyJoin: z.string().min(10),
  experience: z.string().optional(),
  availability: z.string().optional(),
});

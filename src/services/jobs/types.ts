import { z } from 'zod';

// Schemas
export const CompanySchema = z.object({
  name: z.string(),
  description: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
});

export const JobSchema = z.object({
  title: z.string(),
  type: z.string(),
  location: z.string(),
  description: z.string(),
  salary: z.string(),
  company: CompanySchema,
  id: z.string(),
});

export const JobResponseSchema = z.array(JobSchema);

// Business Models

export type Company = z.infer<typeof CompanySchema>;
export type Job = z.infer<typeof JobSchema>;
export type JobResponse = z.infer<typeof JobResponseSchema>;

// API Request DTOs
export type CreateCompany = z.infer<typeof CompanySchema>;

export type UpdateCompany = z.infer<typeof CompanySchema>;

export type CreateJob = z.infer<typeof JobSchema>;

export type UpdateJob = z.infer<typeof JobSchema>;

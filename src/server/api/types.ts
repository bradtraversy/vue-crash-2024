import { z } from 'zod';

export const RequestSchema = z.object({
  code: z.number(),
  data: z.object({}),
  msg: z.string(),
  pt: z.string(),
  seq: z.string(),
  success: z.boolean(),
});

export type Request = z.infer<typeof RequestSchema>;

import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

;

export const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: userNameSchema,
  email: z.string().email(),
  profileImg: z.string(),
  isDeleted: z.boolean().optional(),
});

export default studentValidationSchema;
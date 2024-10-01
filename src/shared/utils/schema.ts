import { validator } from '@/shared/utils/validator';
import { z } from 'zod';

export const FormSchemaLogin = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email('Email must be valid'),
  password: z
    .string()
    .min(1, {
      message: 'Password is required',
    })
    .regex(validator.password, 'Password must contain at least 6 characters'),
});

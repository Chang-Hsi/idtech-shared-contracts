import { z } from 'zod'

export const settingsEmployeeSchema = z.object({
  id: z.string().trim().min(1),
  email: z.string().trim().email().min(1),
  displayName: z.string().trim().min(1),
  avatarUrl: z.string().trim().url().optional().or(z.literal('')).default(''),
  status: z.enum(['active', 'archived']).default('active'),
  roleIds: z.array(z.string().trim().min(1)).default([]),
  lastLoginAt: z.string().trim().optional(),
  forcePasswordReset: z.boolean().optional().default(false),
})

export const settingsEmployeesWriteSchema = z.object({
  employees: z.array(settingsEmployeeSchema).min(1),
  updatedBy: z.string().trim().optional(),
})

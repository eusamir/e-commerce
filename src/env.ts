import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    // o metodo flaten serve para formatar erros que aconteceram
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment varibles.')
}

export const env = parsedEnv.data

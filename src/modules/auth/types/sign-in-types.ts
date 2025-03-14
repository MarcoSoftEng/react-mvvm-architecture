import type { z } from 'zod'

import type { signInSchema } from '../schemas/sign-in-schema'

export type SignInFormData = z.infer<typeof signInSchema>

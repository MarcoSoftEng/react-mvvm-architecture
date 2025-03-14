import type { z } from 'zod'

import type { signUpSchema } from '../schemas/sign-up-schema'

export type SignUpFormData = z.infer<typeof signUpSchema>

import type { ProfQuestion, ProfOption } from '@prisma/client'
import type { MakeCreate } from './common'

export type UpdateProfQuestionDTO = ProfQuestion
export type CreateProfQuestionDTO = MakeCreate<UpdateProfQuestionDTO>

export type UpdateProfOptionDTO = ProfOption
export type CreateProfOptionDTO = MakeCreate<ProfOption>

import { DB } from '~/prisma/modules'
import type { CreateProfQuestionDTO } from '~/types/proforientation'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateProfQuestionDTO>(event)
    return await DB.ProfQuestion.create(body)
})

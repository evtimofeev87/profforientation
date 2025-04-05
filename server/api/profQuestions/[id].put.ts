import { DB } from '~/prisma/modules'
import type { UpdateProfQuestionDTO } from '~/types/proforientation'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateProfQuestionDTO>(event)
    return await DB.ProfQuestion.update(id!, body)
})

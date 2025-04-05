import { DB } from '~/prisma/modules'
import type { CreateProfOptionDTO } from '~/types/proforientation'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateProfOptionDTO>(event)
    return await DB.ProfOption.create(body)
})

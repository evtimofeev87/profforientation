import { DB } from '~/prisma/modules'
import type { CreateProfessionCategoryDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateProfessionCategoryDTO>(event)
    return await DB.ProfessionCategory.create(body)
})

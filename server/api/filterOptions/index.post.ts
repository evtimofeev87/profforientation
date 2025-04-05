import { DB } from '~/prisma/modules'
import type { CreateFilterOptionDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFilterOptionDTO>(event)
    return await DB.FilterOption.create(body)
})

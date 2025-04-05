import { DB } from '~/prisma/modules'
import type { UpdateFilterOptionDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFilterOptionDTO>(event)
    return await DB.FilterOption.update(id!, body)
})

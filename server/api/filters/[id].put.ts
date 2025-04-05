import { DB } from '~/prisma/modules'
import type { UpdateFilterDTO } from '~/types/filters'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFilterDTO>(event)
    return await DB.Filter.update(id!, body)
})

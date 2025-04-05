import { DB } from '~/prisma/modules'
import type { CreateFilterDTO } from '~/types/filters'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFilterDTO>(event)
    return await DB.Filter.create(body)
})

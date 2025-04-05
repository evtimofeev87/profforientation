import { DB } from '~/prisma/modules'
import type { UpdateProfOptionDTO } from '~/types/proforientation'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateProfOptionDTO>(event)
    return await DB.ProfOption.update(id!, body)
})

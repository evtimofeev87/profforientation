import { DB } from '~/prisma/modules'
import type { UpdateProfessionDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    console.log('profession update 1')
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateProfessionDTO>(event)
    return await DB.Profession.update(id!, body)
})

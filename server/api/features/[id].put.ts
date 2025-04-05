import { DB } from '~/prisma/modules'
import type { UpdateFeatureDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFeatureDTO>(event)
    return await DB.Feature.update(id!, body)
})

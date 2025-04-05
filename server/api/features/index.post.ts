import { DB } from '~/prisma/modules'
import type { CreateFeatureDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFeatureDTO>(event)
    return await DB.Feature.create(body)
})

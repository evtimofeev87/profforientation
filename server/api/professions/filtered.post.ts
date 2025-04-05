import { DB } from '~/prisma/modules'
import type { GetFilteredProfessionsPayload } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<GetFilteredProfessionsPayload>(event)
    return await DB.Profession.getFilteredList(body)
})

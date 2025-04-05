import { DB } from '~/prisma/modules'
import type { CreateProfessionDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateProfessionDTO>(event)
    return await DB.Profession.create(body)
})

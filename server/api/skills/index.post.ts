import { DB } from '~/prisma/modules'
import type { CreateSkillDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateSkillDTO>(event)
    return await DB.Skill.create(body)
})

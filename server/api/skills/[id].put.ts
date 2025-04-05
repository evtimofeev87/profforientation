import { DB } from '~/prisma/modules'
import type { UpdateSkillDTO } from '~/types/professions'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateSkillDTO>(event)
    return await DB.Skill.update(id!, body)
})

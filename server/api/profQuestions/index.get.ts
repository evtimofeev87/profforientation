import { DB } from '~/prisma/modules'

export default defineEventHandler(async () => {
    return await DB.ProfQuestion.getList()
})

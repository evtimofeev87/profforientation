import { DB } from '~/prisma/modules'

export default defineEventHandler(async () => {
    return await DB.ProfessionCategory.getList()
})

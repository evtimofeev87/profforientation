import { DB } from '~/prisma/modules'

export default defineEventHandler(async (event) => {
    return await DB.Profession.getList()
})

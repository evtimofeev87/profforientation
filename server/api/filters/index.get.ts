import { DB } from '~/prisma/modules'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    return await DB.Filter.getList({
        categoryId: query.categoryId as string,
    })
})

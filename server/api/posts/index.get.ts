import { DB } from '~/prisma/modules'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    return await DB.Post.getList({
        postCategoryId: query.categoryId as string,
        query: query.query as string,
    })
})

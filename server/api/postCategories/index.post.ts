import { DB } from '~/prisma/modules'
import type { CreatePostCategoryDTO } from '~/types/posts'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreatePostCategoryDTO>(event)
    return await DB.PostCategory.create(body)
})

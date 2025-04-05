import { DB } from '~/prisma/modules'
import type { CreatePostDTO } from '~/types/posts'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreatePostDTO>(event)
    return await DB.Post.create(body)
})

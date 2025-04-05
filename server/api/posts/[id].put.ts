import { DB } from '~/prisma/modules'
import type { UpdatePostDTO } from '~/types/posts'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdatePostDTO>(event)
    return await DB.Post.update(id!, body)
})

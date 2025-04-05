import { DB } from '~/prisma/modules'
import type { UpdateFeedTagDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFeedTagDTO>(event)
    return await DB.FeedTag.update(id!, body)
})

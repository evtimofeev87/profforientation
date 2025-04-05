import { DB } from '~/prisma/modules'
import type { UpdateFeedBadgeDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFeedBadgeDTO>(event)
    return await DB.FeedBadge.update(id!, body)
})

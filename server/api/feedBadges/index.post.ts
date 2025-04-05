import { DB } from '~/prisma/modules'
import type { CreateFeedBadgeDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFeedBadgeDTO>(event)
    return await DB.FeedBadge.create(body)
})

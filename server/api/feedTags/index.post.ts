import { DB } from '~/prisma/modules'
import type { CreateFeedTagDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFeedTagDTO>(event)
    return await DB.FeedTag.create(body)
})

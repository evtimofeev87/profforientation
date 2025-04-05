import { DB } from '~/prisma/modules'
import type { CreateFeedDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateFeedDTO>(event)
    return await DB.Feed.create(body)
})

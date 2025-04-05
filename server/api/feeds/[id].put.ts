import { DB } from '~/prisma/modules'
import type { UpdateFeedDTO } from '~/types/feeds'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody<UpdateFeedDTO>(event)
    return await DB.Feed.update(id!, body)
})

import prisma from '../client'
import type { CreateFeedDTO, UpdateFeedDTO } from '~/types/feeds'

export const FeedModel = {
    create: async (feed: CreateFeedDTO) => {
        return await prisma.feed.create({
            data: feed,
        })
    },

    update: async (id: string, feed: UpdateFeedDTO) => {
        return await prisma.feed.update({
            where: { id },
            data: feed,
        })
    },

    delete: async (id: string) => {
        return await prisma.feed.delete({
            where: { id },
        })
    },

    getList: async (professionId: string) => {
        let query = {}
        if (professionId) {
            query = {
                where: professionId,
            }
        }
        return await prisma.feed.findMany(query)
    },

    get: async ({ id }: { id: string }): Promise<UpdateFeedDTO | null> => {
        return await prisma.feed.findFirst({
            where: { id },
        })
    },
}

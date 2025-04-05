import prisma from '../client'
import type { CreateFeedTagDTO, UpdateFeedTagDTO } from '~/types/feeds'

export const FeedTagModel = {
    create: async (feature: CreateFeedTagDTO) => {
        return await prisma.feedTag.create({
            data: feature,
        })
    },

    update: async (id: string, feature: UpdateFeedTagDTO) => {
        return await prisma.feedTag.update({
            where: { id },
            data: feature,
        })
    },

    delete: async (id: string) => {
        return await prisma.feedTag.delete({
            where: { id },
        })
    },
}

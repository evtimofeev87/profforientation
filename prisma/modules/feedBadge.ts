import prisma from '../client'
import type { CreateFeedBadgeDTO, UpdateFeedBadgeDTO } from '~/types/feeds'

export const FeedBadgeModel = {
    create: async (feature: CreateFeedBadgeDTO) => {
        return await prisma.feedBadge.create({
            data: feature,
        })
    },

    update: async (id: string, feature: UpdateFeedBadgeDTO) => {
        return await prisma.feedBadge.update({
            where: { id },
            data: feature,
        })
    },

    delete: async (id: string) => {
        return await prisma.feedBadge.delete({
            where: { id },
        })
    },
}

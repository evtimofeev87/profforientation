import prisma from '../client'
import type { CreateFeatureDTO, UpdateFeatureDTO } from '~/types/professions'

export const FeatureModel = {
    create: async (feature: CreateFeatureDTO) => {
        return await prisma.feature.create({
            data: feature,
        })
    },

    update: async (id: string, feature: UpdateFeatureDTO) => {
        return await prisma.feature.update({
            where: { id },
            data: feature,
        })
    },

    delete: async (id: string) => {
        return await prisma.feature.delete({
            where: { id },
        })
    },

    getList: async (professionId: string): Promise<UpdateFeatureDTO[]> => {
        return await prisma.feature.findMany({
            where: { professionId },
        })
    },
}

import prisma from '../client'
import type {
    CreateProfOptionDTO,
    UpdateProfOptionDTO,
} from '~/types/proforientation'

export const ProfOptionModel = {
    create: async (feature: CreateProfOptionDTO) => {
        return await prisma.profOption.create({
            data: feature,
        })
    },

    update: async (id: string, feature: UpdateProfOptionDTO) => {
        return await prisma.profOption.update({
            where: { id },
            data: feature,
        })
    },

    delete: async (id: string) => {
        return await prisma.profOption.delete({
            where: { id },
        })
    },
}

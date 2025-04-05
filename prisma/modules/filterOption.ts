import prisma from '../client'
import type {
    CreateFilterOptionDTO,
    UpdateFilterOptionDTO,
} from '~/types/filters'

export const FilterOptionModel = {
    create: async (filter: CreateFilterOptionDTO) => {
        return await prisma.filterOption.create({
            data: filter,
        })
    },

    update: async (id: string, post: UpdateFilterOptionDTO) => {
        return await prisma.filterOption.update({
            where: { id },
            data: post,
        })
    },

    delete: async (id: string) => {
        return await prisma.filterOption.delete({
            where: { id },
        })
    },
}

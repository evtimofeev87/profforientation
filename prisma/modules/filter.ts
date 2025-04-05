import prisma from '../client'
import type { CreateFilterDTO, UpdateFilterDTO } from '~/types/filters'

export const FilterModel = {
    create: async (filter: CreateFilterDTO) => {
        return await prisma.filter.create({
            data: filter,
        })
    },

    update: async (id: string, post: UpdateFilterDTO) => {
        return await prisma.filter.update({
            where: { id },
            data: post,
        })
    },

    delete: async (id: string) => {
        return await prisma.filter.delete({
            where: { id },
        })
    },

    getList: async ({
        categoryId,
    }: {
        categoryId: string
    }): Promise<UpdateFilterDTO[]> => {
        const where: Record<string, any> = {}

        if (categoryId) {
            where.professionCategoryId = categoryId
        }

        return await prisma.filter.findMany({
            where,
        })
    },
}

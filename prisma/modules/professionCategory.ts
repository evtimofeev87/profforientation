import prisma from '../client'
import type {
    CreateProfessionCategoryDTO,
    UpdateProfessionCategoryDTO,
} from '~/types/professions'

export const ProfessionCategoryModel = {
    create: async (professionCategory: CreateProfessionCategoryDTO) => {
        return await prisma.professionCategory.create({
            data: professionCategory,
        })
    },

    update: async (
        id: string,
        professionCategory: UpdateProfessionCategoryDTO
    ) => {
        return await prisma.professionCategory.update({
            where: { id },
            data: professionCategory,
        })
    },

    delete: async (id: string) => {
        return await prisma.professionCategory.delete({
            where: { id },
        })
    },

    getList: async (): Promise<UpdateProfessionCategoryDTO[]> => {
        return await prisma.professionCategory.findMany({})
    },
}

import prisma from '../client'
import type {
    CreatePostCategoryDTO,
    UpdatePostCategoryDTO,
} from '~/types/posts'

export const PostCategoryModel = {
    create: async (postCategory: CreatePostCategoryDTO) => {
        return await prisma.postCategory.create({
            data: postCategory,
        })
    },

    update: async (id: string, postCategory: UpdatePostCategoryDTO) => {
        return await prisma.postCategory.update({
            where: { id },
            data: postCategory,
        })
    },

    delete: async (id: string) => {
        return await prisma.postCategory.delete({
            where: { id },
        })
    },

    getList: async (): Promise<UpdatePostCategoryDTO[]> => {
        return await prisma.postCategory.findMany({})
    },
}

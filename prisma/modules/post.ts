import prisma from '../client'
import type { CreatePostDTO, UpdatePostDTO } from '~/types/posts'

export type PostFilter = {
    postCategoryId?: string
    query?: string
}

export const PostModel = {
    get: async ({ id }: { id: string }): Promise<UpdatePostDTO | null> => {
        return await prisma.post.findFirst({
            where: { id },
        })
    },

    getList: async () => {
        return await prisma.post.findMany({})
    },

    getFilteredList: async ({
        postCategoryId,
        query,
    }: PostFilter): Promise<UpdatePostDTO[]> => {
        console.log('prisma get posts')
        const findByQuery = {
            OR: [
                { title: { contains: query } },
                { subtitle: { contains: query } },
            ],
        }
        const findByCategory = { postCategoryId }

        let filter = {}

        if (query) {
            filter = { ...filter, ...findByQuery }
        }
        if (postCategoryId) {
            filter = { ...filter, ...findByCategory }
        }

        return await prisma.post.findMany({
            where: {
                AND: [filter],
            },
        })
    },

    create: async (post: CreatePostDTO) => {
        return await prisma.post.create({
            data: post,
        })
    },

    update: async (id: string, post: UpdatePostDTO) => {
        return await prisma.post.update({
            where: { id },
            data: post,
        })
    },

    delete: async (id: string) => {
        return await prisma.post.delete({
            where: { id },
        })
    },
}

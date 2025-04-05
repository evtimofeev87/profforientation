import prisma from '../client'
import type {
    CreateProfQuestionDTO,
    UpdateProfQuestionDTO,
} from '~/types/proforientation'

export const ProfQuestionModel = {
    create: async (question: CreateProfQuestionDTO) => {
        return await prisma.profQuestion.create({
            data: question,
        })
    },

    update: async (id: string, question: UpdateProfQuestionDTO) => {
        return await prisma.profQuestion.update({
            where: { id },
            data: question,
        })
    },

    delete: async (id: string) => {
        return await prisma.profQuestion.delete({
            where: { id },
        })
    },

    getList: async (): Promise<UpdateProfQuestionDTO[]> => {
        return await prisma.profQuestion.findMany({})
    },
}

import prisma from '../client'
import type { CreateSkillDTO, UpdateSkillDTO } from '~/types/professions'

export const SkillModel = {
    create: async (skill: CreateSkillDTO) => {
        return await prisma.skill.create({
            data: skill,
        })
    },

    update: async (id: string, skill: UpdateSkillDTO) => {
        return await prisma.skill.update({
            where: { id },
            data: skill,
        })
    },

    delete: async (id: string) => {
        return await prisma.skill.delete({
            where: { id },
        })
    },

    getList: async (professionId: string): Promise<UpdateSkillDTO[]> => {
        return await prisma.skill.findMany({
            where: { professionId },
        })
    },
}

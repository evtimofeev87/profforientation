import prisma from '../client'
import type {
    CreateProfessionDTO,
    UpdateProfessionDTO,
} from '~/types/professions'
import type { SelectedFiltersList } from '~/types/filters'

export const ProfessionModel = {
    create: async (profession: CreateProfessionDTO) => {
        return await prisma.profession.create({
            data: profession,
        })
    },

    update: async (id: string, profession: UpdateProfessionDTO) => {
        return await prisma.profession.update({
            where: { id },
            data: profession,
        })
    },

    delete: async (id: string) => {
        return await prisma.profession.delete({
            where: { id },
        })
    },

    get: async ({
        id,
    }: {
        id: string
    }): Promise<UpdateProfessionDTO | null> => {
        return await prisma.profession.findFirst({
            where: { id },
        })
    },

    getList: async (): Promise<UpdateProfessionDTO[]> => {
        return await prisma.profession.findMany()
    },

    getFilteredList: async ({
        professionCategoryId,
        selectedFiltersList,
    }: {
        professionCategoryId: string
        selectedFiltersList: SelectedFiltersList
    }): Promise<UpdateProfessionDTO[]> => {
        const where: Record<string, any> = { AND: [] }

        if (professionCategoryId) {
            where.AND.push({
                professionCategoryId,
            })
        }

        if (selectedFiltersList) {
            const filterConditions = Object.entries(selectedFiltersList).map(
                ([filterId, optionIdsList]) => ({
                    filterValues: {
                        some: {
                            filterId: Number(filterId),
                            optionId: { in: optionIdsList.map(Number) },
                        },
                    },
                })
            )
            where.AND = [...where.AND, ...filterConditions]
        }

        return await prisma.profession.findMany({
            where,
        })
    },
}

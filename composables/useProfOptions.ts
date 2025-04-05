import type {
    CreateProfOptionDTO,
    UpdateProfOptionDTO,
} from '~/types/proforientation'

export const useProfOptions = () => {
    const createProfOption = async (profOption: CreateProfOptionDTO) => {
        return await $fetch(`/api/prof-options`, {
            method: 'POST',
            body: profOption,
        })
    }

    const updateProfOption = async (
        id: string,
        profOption: UpdateProfOptionDTO
    ) => {
        await $fetch(`/api/prof-options/${id}`, {
            method: 'PUT',
            body: profOption,
        })
    }

    const deleteProfOption = async (id: string) => {
        await $fetch(`/api/prof-options/${id}`, { method: 'DELETE' })
    }

    return {
        createProfOption,
        updateProfOption,
        deleteProfOption,
    }
}

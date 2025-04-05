import type { CreateFilterDTO, UpdateFilterDTO } from '~/types/filters'

export const useFilterOptions = () => {
    const createFilterOption = async (skill: CreateFilterDTO) => {
        return await $fetch(`/api/filter-options`, {
            method: 'POST',
            body: skill,
        })
    }

    const updateFilterOption = async (id: string, skill: UpdateFilterDTO) => {
        await $fetch(`/api/filter-options/${id}`, {
            method: 'PUT',
            body: skill,
        })
    }

    const deleteFilterOption = async (id: string) => {
        await $fetch(`/api/filter-options/${id}`, { method: 'DELETE' })
    }

    return {
        createFilterOption,
        updateFilterOption,
        deleteFilterOption,
    }
}

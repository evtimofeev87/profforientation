import type { CreateFeatureDTO, UpdateFeatureDTO } from '~/types/professions'

export const useFeatures = () => {
    const createFeature = async (skill: CreateFeatureDTO) => {
        return await $fetch(`/api/features`, {
            method: 'POST',
            body: skill,
        })
    }

    const updateFeature = async (id: string, skill: UpdateFeatureDTO) => {
        await $fetch(`/api/features/${id}`, {
            method: 'PUT',
            body: skill,
        })
    }

    const deleteFeature = async (id: string) => {
        await $fetch(`/api/features/${id}`, { method: 'DELETE' })
    }

    return {
        createFeature,
        updateFeature,
        deleteFeature,
    }
}

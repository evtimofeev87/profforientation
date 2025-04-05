import type { CreateSkillDTO, UpdateSkillDTO } from '~/types/professions'
import { useRoute } from 'vue-router'

export const useSkills = () => {
    const route = useRoute()
    const professionId = route.params.id

    const {
        data: skillsList,
        status: skillsListStatus,
        refresh,
    } = useFetch<UpdateSkillDTO[]>(`/api/professions/${professionId}/skills`)

    const createSkill = async (skill: CreateSkillDTO) => {
        await $fetch(`/api/skills`, {
            method: 'POST',
            body: skill,
        })
        await refresh()
    }

    const updateSkill = async (id: string, skill: UpdateSkillDTO) => {
        await $fetch(`/api/skills/${id}`, {
            method: 'PUT',
            body: skill,
        })
        await refresh()
    }

    const deleteSkill = async (id: string) => {
        await $fetch(`/api/skills/${id}`, { method: 'DELETE' })
        await refresh()
    }

    return {
        createSkill,
        updateSkill,
        deleteSkill,
        skillsList,
        skillsListStatus,
    }
}

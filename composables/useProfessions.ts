import type {
    CreateProfessionDTO,
    UpdateProfessionDTO,
} from '~/types/professions'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const useProfessionCommon = () => {
    const router = useRouter()

    const createProfession = async (
        profession: CreateProfessionDTO
    ): Promise<UpdateProfessionDTO> => {
        return await $fetch('/api/professions', {
            method: 'POST',
            body: profession,
        })
    }

    const updateProfession = async (
        id: string,
        profession: UpdateProfessionDTO
    ): Promise<UpdateProfessionDTO> => {
        return await $fetch(`/api/professions/${id}`, {
            method: 'PUT',
            body: profession,
        })
    }

    const getExistedProfession = async (
        id: string
    ): Promise<UpdateProfessionDTO> => {
        return await $fetch(`/api/professions/${id}`, { method: 'GET' })
    }

    const deleteProfession = async (id: string) => {
        await $fetch(`/api/professions/${id}`, { method: 'DELETE' })
    }

    const toProfessionsList = () => {
        router.push({ name: 'admin-professions-list' })
    }

    const toProfessionNew = () => {
        router.push({ name: 'admin-professions-edit', params: { id: 'new' } })
    }

    const toProfessionEdit = (id: string) => {
        router.push({ name: 'admin-professions-edit', params: { id } })
    }

    const isExistedProfession = (
        profession: UpdateProfessionDTO | CreateProfessionDTO
    ): profession is UpdateProfessionDTO => {
        return 'id' in profession
    }

    return {
        createProfession,
        updateProfession,
        deleteProfession,
        toProfessionNew,
        toProfessionEdit,
        toProfessionsList,
        isExistedProfession,
        getExistedProfession,
    }
}

export const useProfessionEdit = async () => {
    const route = useRoute()
    const router = useRouter()
    const isNew = computed(() => route.params.id === 'new')

    const {
        createProfession,
        updateProfession,
        isExistedProfession,
        getExistedProfession,
        toProfessionsList,
    } = useProfessionCommon()

    const { data: profession, refresh } = await useAsyncData<
        CreateProfessionDTO,
        UpdateProfessionDTO
    >('profession', () => {
        if (route.params.id === 'new') {
            return Promise.resolve(createEmptyObject<CreateProfessionDTO>())
        }
        return getExistedProfession(route.params.id as string)
    })

    const saveProfession = async () => {
        if (!profession.value) return
        if (isExistedProfession(profession.value)) {
            await updateProfession(
                route.params.id as string,
                toRaw(profession.value)
            )
        } else {
            const result = await createProfession(toRaw(profession.value))
            await router.replace({
                params: { id: result.id },
            })
            await refresh()
        }
    }

    return {
        profession,
        saveProfession,
        toProfessionsList,
        isNew,
    }
}

export const useProfessionsList = () => {
    const { deleteProfession, toProfessionNew, toProfessionEdit } =
        useProfessionCommon()

    const {
        data: professionsList,
        status: professionsListStatus,
        refresh,
    } = useFetch<UpdateProfessionDTO[]>(`/api/professions`)

    const onDelete = async (id: string) => {
        await deleteProfession(id)
        refresh()
    }

    return {
        professionsList,
        professionsListStatus,
        onDelete,
        toProfessionNew,
        toProfessionEdit,
    }
}

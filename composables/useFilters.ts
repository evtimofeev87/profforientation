import type { CreateFilterDTO, UpdateFilterDTO } from '~/types/filters'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const useFilterCommon = () => {
    const router = useRouter()

    const createFilter = async (filter: CreateFilterDTO) => {
        return await $fetch('/api/filters', {
            method: 'POST',
            body: filter,
        })
    }

    const updateFilter = async (id: string, filter: UpdateFilterDTO) => {
        await $fetch(`/api/filters/${id}`, {
            method: 'PUT',
            body: filter,
        })
    }

    const deleteFilter = async (id: string) => {
        await $fetch(`/api/filters/${id}`, { method: 'DELETE' })
    }

    const toFiltersList = () => {
        router.push({ name: 'admin-filters-list' })
    }

    const toFilterNew = () => {
        router.push({ name: 'admin-filters-new' })
    }

    const toFilterEdit = (id: string) => {
        router.push({ name: 'admin-filters-edit', params: { id } })
    }

    return {
        createFilter,
        updateFilter,
        deleteFilter,
        toFilterNew,
        toFilterEdit,
        toFiltersList,
    }
}

export const useCreateFilter = () => {
    const { createFilter, toFiltersList } = useFilterCommon()

    const filter = useState('create-filter', () =>
        createEmptyObject<CreateFilterDTO>()
    )

    const onCreate = async () => {
        await createFilter(unref(filter))
        toFiltersList()
    }

    return {
        filter,
        onCreate,
        toFiltersList,
    }
}

export const useUpdateFilter = () => {
    const { updateFilter, toFiltersList } = useFilterCommon()
    const route = useRoute()

    const { data: filter, status: filterStatus } = useFetch<UpdateFilterDTO>(
        `/api/filters/${route.params.id}`
    )

    const onUpdate = async () => {
        if (filter.value) {
            await updateFilter(route.params.id as string, filter.value)
        }

        toFiltersList()
    }

    return {
        filter,
        filterStatus,
        onUpdate,
        toFiltersList,
    }
}

export const useFiltersList = () => {
    const { deleteFilter, toFilterNew, toFilterEdit } = useFilterCommon()

    const {
        data: filtersList,
        status: filtersListStatus,
        refresh,
    } = useFetch<UpdateFilterDTO[]>(`/api/filters`)

    const onDelete = async (id: string) => {
        await deleteFilter(id)
        refresh()
    }

    return {
        filtersList,
        filtersListStatus,
        onDelete,
        toFilterNew,
        toFilterEdit,
    }
}

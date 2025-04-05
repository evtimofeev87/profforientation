import type { CreateFeedDTO, UpdateFeedDTO } from '~/types/feeds'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const useFeedCommon = () => {
    const router = useRouter()

    const createFeed = async (feed: CreateFeedDTO) => {
        return await $fetch('/api/feeds', {
            method: 'POST',
            body: feed,
        })
    }

    const updateFeed = async (id: string, feed: UpdateFeedDTO) => {
        await $fetch(`/api/feeds/${id}`, {
            method: 'PUT',
            body: feed,
        })
    }

    const deleteFeed = async (id: string) => {
        await $fetch(`/api/feeds/${id}`, { method: 'DELETE' })
    }

    const toFeedsList = () => {
        router.push({ name: 'admin-feeds-list' })
    }

    const toFeedNew = () => {
        router.push({ name: 'admin-feeds-new' })
    }

    const toFeedEdit = (id: string) => {
        router.push({ name: 'admin-feeds-edit', params: { id } })
    }

    return {
        createFeed,
        updateFeed,
        deleteFeed,
        toFeedNew,
        toFeedEdit,
        toFeedsList,
    }
}

export const useCreateFeed = () => {
    const { createFeed, toFeedsList } = useFeedCommon()

    const feed = useState('create-feed', () =>
        createEmptyObject<CreateFeedDTO>()
    )

    const onCreate = async () => {
        await createFeed(unref(feed))
        toFeedsList()
    }

    return {
        feed,
        onCreate,
        toFeedsList,
    }
}

export const useUpdateFeed = () => {
    const { updateFeed, toFeedsList } = useFeedCommon()
    const route = useRoute()

    const { data: feed, status: feedStatus } = useFetch<UpdateFeedDTO>(
        `/api/feeds/${route.params.id}`
    )

    const onUpdate = async () => {
        if (feed.value) {
            await updateFeed(route.params.id as string, feed.value)
        }

        toFeedsList()
    }

    return {
        feed,
        feedStatus,
        onUpdate,
        toFeedsList,
    }
}

export const useFeedsList = () => {
    const { deleteFeed, toFeedNew, toFeedEdit } = useFeedCommon()

    const {
        data: feedsList,
        status: feedsListStatus,
        refresh,
    } = useFetch<UpdateFeedDTO[]>(`/api/feeds`)

    const onDelete = async (id: string) => {
        await deleteFeed(id)
        refresh()
    }

    return {
        feedsList,
        feedsListStatus,
        onDelete,
        toFeedNew,
        toFeedEdit,
    }
}

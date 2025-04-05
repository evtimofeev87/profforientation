import type { CreatePostDTO, UpdatePostDTO } from '~/types/posts'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const usePostCommon = () => {
    const router = useRouter()

    const createPost = async (post: CreatePostDTO) => {
        return await $fetch('/api/posts', {
            method: 'POST',
            body: post,
        })
    }

    const updatePost = async (id: string, post: UpdatePostDTO) => {
        await $fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: post,
        })
    }

    const deletePost = async (id: string) => {
        await $fetch(`/api/posts/${id}`, { method: 'DELETE' })
    }

    const toPostsList = () => {
        router.push({ name: 'admin-posts-list' })
    }

    const toPostNew = () => {
        router.push({ name: 'admin-posts-new' })
    }

    const toPostEdit = (id: string) => {
        router.push({ name: 'admin-posts-edit', params: { id } })
    }

    return {
        createPost,
        updatePost,
        deletePost,
        toPostNew,
        toPostEdit,
        toPostsList,
    }
}

export const useCreatePost = () => {
    const { createPost, toPostsList } = usePostCommon()

    const post = useState('create-post', () =>
        createEmptyObject<CreatePostDTO>()
    )
    post.value.timeToRead = 0
    post.value.content = ''

    const onCreate = async () => {
        await createPost(unref(post))
        toPostsList()
    }

    return {
        post,
        onCreate,
        toPostsList,
    }
}

export const useUpdatePost = () => {
    const { updatePost, toPostsList } = usePostCommon()
    const route = useRoute()

    const { data: post, status: postStatus } = useFetch<UpdatePostDTO>(
        `/api/posts/${route.params.id}`
    )

    const onUpdate = async () => {
        if (post.value) {
            await updatePost(route.params.id as string, post.value)
        }

        toPostsList()
    }

    return {
        post,
        postStatus,
        onUpdate,
        toPostsList,
    }
}

export const usePostsList = () => {
    const { deletePost, toPostNew, toPostEdit } = usePostCommon()

    const {
        data: postsList,
        status: postsListStatus,
        refresh,
    } = useFetch<UpdatePostDTO[]>(`/api/posts`)

    const onDelete = async (id: string) => {
        await deletePost(id)
        refresh()
    }

    return {
        postsList,
        postsListStatus,
        onDelete,
        toPostNew,
        toPostEdit,
    }
}

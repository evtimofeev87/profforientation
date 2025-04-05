import type {
    CreateProfQuestionDTO,
    UpdateProfQuestionDTO,
} from '~/types/proforientation'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const useProfQuestionCommon = () => {
    const router = useRouter()

    const createProfQuestion = async (profQuestion: CreateProfQuestionDTO) => {
        return await $fetch('/api/prof-questions', {
            method: 'POST',
            body: profQuestion,
        })
    }

    const updateProfQuestion = async (
        id: string,
        profQuestion: UpdateProfQuestionDTO
    ) => {
        await $fetch(`/api/prof-questions/${id}`, {
            method: 'PUT',
            body: profQuestion,
        })
    }

    const deleteProfQuestion = async (id: string) => {
        await $fetch(`/api/prof-questions/${id}`, { method: 'DELETE' })
    }

    const toProfQuestionsList = () => {
        router.push({ name: 'admin-prof-questions-list' })
    }

    const toProfQuestionNew = () => {
        router.push({ name: 'admin-prof-questions-new' })
    }

    const toProfQuestionEdit = (id: string) => {
        router.push({ name: 'admin-prof-questions-edit', params: { id } })
    }

    return {
        createProfQuestion,
        updateProfQuestion,
        deleteProfQuestion,
        toProfQuestionsList,
        toProfQuestionNew,
        toProfQuestionEdit,
    }
}

export const useCreateProfQuestion = () => {
    const { createProfQuestion, toProfQuestionsList } = useProfQuestionCommon()

    const profQuestion = useState('create-prof-questions', () =>
        createEmptyObject<CreateProfQuestionDTO>()
    )

    const onCreate = async () => {
        await createProfQuestion(unref(profQuestion))
        toProfQuestionsList()
    }

    return {
        profQuestion,
        onCreate,
        toProfQuestionsList,
    }
}

export const useUpdateProfQuestion = () => {
    const { updateProfQuestion, toProfQuestionsList } = useProfQuestionCommon()
    const route = useRoute()

    const { data: profQuestion, status: profQuestionStatus } =
        useFetch<UpdateProfQuestionDTO>(
            `/api/prof-questions/${route.params.id}`
        )

    const onUpdate = async () => {
        if (profQuestion.value) {
            await updateProfQuestion(
                route.params.id as string,
                profQuestion.value
            )
        }

        toProfQuestionsList()
    }

    return {
        profQuestion,
        profQuestionStatus,
        onUpdate,
        toProfQuestionsList,
    }
}

export const useProfQuestionsList = () => {
    const { deleteProfQuestion, toProfQuestionNew, toProfQuestionEdit } =
        useProfQuestionCommon()

    const {
        data: profQuestionsList,
        status: profQuestionsListStatus,
        refresh,
    } = useFetch<UpdateProfQuestionDTO[]>(`/api/prof-questions`)

    const onDelete = async (id: string) => {
        await deleteProfQuestion(id)
        refresh()
    }

    return {
        profQuestionsList,
        profQuestionsListStatus,
        onDelete,
        toProfQuestionNew,
        toProfQuestionEdit,
    }
}

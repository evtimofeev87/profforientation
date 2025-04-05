<template>
    <div>
        <el-button @click="toPostNew">Создать статью</el-button>
        <div v-if="postsListStatus === 'pending'">Загрузка</div>
        <el-table v-else :data="postsList!">
            <el-table-column prop="title" label="Заголовок" />
            <el-table-column prop="image" label="Изображение" />
            <el-table-column label="Действия">
                <template #default="{ row }">
                    <div class="flex gap-3">
                        <AdminTableAction
                            @click="toPostEdit(row.id)"
                            icon="Edit"
                        />
                        <AdminTableAction
                            @click="onDelete(row.id)"
                            icon="Delete"
                        />
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { usePostsList } from '~/composables/usePost'

definePageMeta({
    name: 'admin-posts-list',
})

const { postsList, postsListStatus, onDelete, toPostNew, toPostEdit } =
    usePostsList()
</script>

<template>
    <div>
        <el-button @click="toFeedNew">Создать фид</el-button>
        <div v-if="feedsListStatus === 'pending'">Загрузка</div>
        <el-table v-else :data="feedsList!">
            <el-table-column prop="companyName" label="Компания" />
            <el-table-column prop="professionName" label="Профессия" />
            <el-table-column label="Действия">
                <template #default="{ row }">
                    <div class="flex gap-3">
                        <AdminTableAction
                            @click="toFeedEdit(row.id)"
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
import { useFeedsList } from '~/composables/useFeeds'

definePageMeta({
    name: 'admin-feeds-list',
})

const { feedsList, feedsListStatus, onDelete, toFeedNew, toFeedEdit } =
    useFeedsList()
</script>

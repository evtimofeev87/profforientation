<template>
    <div>
        <div v-if="feedStatus === 'pending'">Загрузка</div>
        <el-form v-else-if="feed" label-width="auto" :model="feed!">
            <el-form-item label="Название компании">
                <el-input v-model="feed.companyName" />
            </el-form-item>
            <el-form-item label="Название профессии">
                <el-input v-model="feed.professionName" />
            </el-form-item>
            <el-form-item label="Месяцев на обучение">
                <el-input v-model="feed.monthsToLearn" />
            </el-form-item>
            <el-form-item label="Изображение">
                <AdminUploadImage v-model="feed.image" />
            </el-form-item>
            <el-form-item label="Ссылка">
                <AdminUploadImage v-model="feed.image" />
            </el-form-item>
            <el-form-item>
                <el-button @click="toFeedsList">Отмена</el-button>
                <el-button type="primary" @click="onUpdate"
                    >Сохранить</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { useUpdateFeed } from '~/composables/useFeeds'

definePageMeta({
    name: 'admin-feeds-edit',
})

const { feed, feedStatus, toFeedsList, onUpdate } = useUpdateFeed()
</script>

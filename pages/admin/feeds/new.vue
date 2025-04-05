<template>
    <el-form label-width="auto" :model="feed!">
        <el-form-item label="Название компании">
            <el-input v-model="feed.companyName" />
        </el-form-item>
        <el-form-item label="Название профессии">
            <el-input v-model="feed.professionName" />
        </el-form-item>
        <el-form-item label="Месяцев на обучение">
            <el-input type="number" v-model.number="feed.monthsToLearn" />
        </el-form-item>
        <el-form-item label="Цена">
            <el-input type="number" v-model.number="feed.price" />
        </el-form-item>
        <el-form-item label="Изображение">
            <AdminUploadImage v-model="feed.image" />
        </el-form-item>
        <el-form-item label="Ссылка">
            <el-input v-model="feed.link" />
        </el-form-item>
        <el-form-item>
            <el-button @click="toFeedsList">Отмена</el-button>
            <el-button type="primary" @click="onCreate">Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { useCreateFeed } from '~/composables/useFeeds'

definePageMeta({
    name: 'admin-feeds-new',
})

const { feed, toFeedsList, onCreate } = useCreateFeed()
</script>

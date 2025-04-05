<template>
    <el-form label-width="auto" :model="post!">
        <el-form-item label="Заголовок">
            <el-input v-model="post.title" />
        </el-form-item>
        <el-form-item label="Подзаголовок">
            <el-input v-model="post.subtitle" />
        </el-form-item>
        <el-form-item label="Изображение">
            <AdminUploadImage v-model="post.image" />
        </el-form-item>
        <el-form-item label="Изображение">
            <AdminEditor v-model="post.content" />
        </el-form-item>
        <el-form-item>
            <el-button @click="toPostsList">Отмена</el-button>
            <el-button type="primary" @click="onCreate">Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { useCreatePost } from '~/composables/usePost'

definePageMeta({
    name: 'admin-posts-new',
})

const { post, toPostsList, onCreate } = useCreatePost()
</script>

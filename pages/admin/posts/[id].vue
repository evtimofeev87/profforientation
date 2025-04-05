<template>
    <div>
        <div v-if="postStatus === 'pending'">Загрузка</div>
        <el-form v-else-if="post" label-width="auto" :model="post!">
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
                <el-button type="primary" @click="onUpdate"
                    >Сохранить</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { useUpdatePost } from '~/composables/usePost'

definePageMeta({
    name: 'admin-posts-edit',
})

const { post, postStatus, toPostsList, onUpdate } = useUpdatePost()
</script>

<template>
    <el-form v-if="profession" label-width="auto" :model="profession!">
        <el-form-item label="Заголовок">
            <el-input v-model="profession.title" />
        </el-form-item>
        <el-form-item label="Описание профессии">
            <el-input v-model="profession.description" />
        </el-form-item>
        <el-form-item label="Зарплата">
            <el-input type="number" v-model.number="profession.salaryMin" />
            <el-input type="number" v-model.number="profession.salaryMax" />
        </el-form-item>
        <el-form-item label="Сложность">
            <el-input type="number" v-model.number="profession.difficulty" />
        </el-form-item>
        <el-form-item label="Изображение">
            <AdminUploadImage v-model="profession.image" />
        </el-form-item>
        <el-form-item label="Пример">
            <el-input v-model="profession.example" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import type {
    CreateProfessionDTO,
    UpdateProfessionDTO,
} from '~/types/professions'

const profession = defineModel<CreateProfessionDTO | UpdateProfessionDTO>()
</script>

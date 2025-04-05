<template>
    <div>
        <div v-if="professionStatus === 'pending'">Загрузка</div>
        <el-form v-else-if="profession" label-width="auto" :model="profession!">
            <el-form-item label="Заголовок">
                <el-input v-model="profession.title" />
            </el-form-item>
            <el-form-item label="Описание профессии">
                <AdminEditor v-model="profession.description" />
            </el-form-item>
            <el-form-item label="Зарплата">
                <el-input type="number" v-model.number="profession.salaryMin" />
                <el-input type="number" v-model.number="profession.salaryMax" />
            </el-form-item>
            <el-form-item label="Сложность">
                <el-input
                    type="number"
                    v-model.number="profession.difficulty"
                />
            </el-form-item>
            <el-form-item label="Изображение">
                <AdminUploadImage v-model="profession.image" />
            </el-form-item>
            <el-form-item label="Пример">
                <AdminEditor v-model="profession.example" />
            </el-form-item>
            <el-form-item>
                <el-button @click="toProfessionsList">Отмена</el-button>
                <el-button type="primary" @click="onUpdate"
                    >Сохранить</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { useUpdateProfession } from '~/composables/useProfessions

const { profession, professionStatus, toProfessionsList, onUpdate } =
    useUpdateProfession()
</script>

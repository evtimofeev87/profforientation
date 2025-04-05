<template>
    <el-form label-width="auto" :model="filter!">
        <el-form-item label="Заголовок">
            <el-input v-model="filter.title" />
        </el-form-item>
        <el-form-item>
            <el-button @click="toFiltersList">Отмена</el-button>
            <el-button type="primary" @click="onCreate">Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { useCreateFilter } from '~/composables/useFilters'

definePageMeta({
    name: 'admin-filters-new',
})

const { filter, toFiltersList, onCreate } = useCreateFilter()
</script>

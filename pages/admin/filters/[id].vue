<template>
    <div>
        <div v-if="filterStatus === 'pending'">Загрузка</div>
        <el-form v-else-if="filter" label-width="auto" :model="filter!">
            <el-form-item label="Заголовок">
                <el-input v-model="filter.title" />
            </el-form-item>
            <el-form-item>
                <el-button @click="toFiltersList">Отмена</el-button>
                <el-button type="primary" @click="onUpdate"
                    >Сохранить</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { useUpdateFilter } from '~/composables/useFilters'

definePageMeta({
    name: 'admin-filters-edit',
})

const { filter, filterStatus, toFiltersList, onUpdate } = useUpdateFilter()
</script>

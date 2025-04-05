<template>
    <div>
        <el-button @click="toFilterNew">Создать фильтр</el-button>
        <div v-if="filtersListStatus === 'pending'">Загрузка</div>
        <el-table v-else :data="filtersList!">
            <el-table-column prop="title" label="Заголовок" />
            <el-table-column label="Действия">
                <template #default="{ row }">
                    <div class="flex gap-3">
                        <AdminTableAction
                            @click="toFilterEdit(row.id)"
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
import { useFiltersList } from '~/composables/useFilters'

definePageMeta({
    name: 'admin-filters-list',
})

const { filtersList, filtersListStatus, onDelete, toFilterNew, toFilterEdit } =
    useFiltersList()
</script>

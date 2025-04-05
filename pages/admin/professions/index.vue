<template>
    <div>
        <el-button @click="toProfessionNew">Создать профессию</el-button>
        <div v-if="professionsListStatus === 'pending'">Загрузка</div>
        <el-table v-else :data="professionsList!">
            <el-table-column prop="title" label="Заголовок" />
            <el-table-column label="Действия">
                <template #default="{ row }">
                    <div class="flex gap-3">
                        <AdminTableAction
                            @click="toProfessionEdit(row.id)"
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
import { useProfessionsList } from '~/composables/useProfessions'

definePageMeta({
    name: 'admin-professions-list',
})

const {
    professionsList,
    professionsListStatus,
    onDelete,
    toProfessionNew,
    toProfessionEdit,
} = useProfessionsList()
</script>

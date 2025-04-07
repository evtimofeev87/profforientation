<template>
    <CommonFormLayout
        :onCancel="toProfessionsList"
        :onSave="saveProfession"
        :saveLabel="isNew ? 'Создать' : 'Сохранить'"
    >
        <el-tabs v-model="activeTab">
            <el-tab-pane label="Общее" name="form"
                ><AdminFormsProfession v-model="profession!"
            /></el-tab-pane>
            <el-tab-pane label="Навыки" name="skills">
                <CommonSubentityList>
                    <template #default="{ item, deleteItem }"> </template>
                    <template #addButton>
                        <el-button @click="createSkill"
                            >Добавить навык</el-button
                        >
                    </template>
                </CommonSubentityList>
            </el-tab-pane>
            <el-tab-pane label="Плюсы/Минусы" name="features">Role</el-tab-pane>
        </el-tabs>
    </CommonFormLayout>
</template>

<script setup lang="ts">
import { useProfessionEdit } from '~/composables/useProfessions'
import { ref } from 'vue'

definePageMeta({
    name: 'admin-professions-edit',
})

const {
    profession,
    saveProfession,
    toProfessionsList,
    isNew,
    createSkill,
    createFeature,
    plusFeatures,
    minusFeatures,
} = await useProfessionEdit()

const activeTab = ref('form')
</script>

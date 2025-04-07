<template>
    <CommonFormLayout
        :onCancel="toProfessionsList"
        :onSave="saveProfession"
        :saveLabel="isNew ? 'Создать' : 'Сохранить'"
    >
        <div v-if="!profession">Загрузка</div>
        <el-tabs v-else v-model="activeTab">
            <el-tab-pane label="Общее" name="form"
                ><AdminFormsProfession v-model="profession!"
            /></el-tab-pane>
            <el-tab-pane label="Навыки" name="skills">
                <CommonSubentityList v-model="profession.skills">
                    <template #default="{ item }">
                        <el-input class="mb-4" v-model="item.title" />
                        <el-input v-model="item.subtitle" />
                    </template>
                    <template #addButton>
                        <el-button @click="createSkill"
                            >Добавить навык</el-button
                        >
                    </template>
                </CommonSubentityList>
            </el-tab-pane>
            <el-tab-pane label="Плюсы/Минусы" name="features">
                <div class="grid grid-cols-2 gap-4">
                    <CommonSubentityList v-model="plusFeatures" title="Плюсы">
                        <template #default="{ item }">
                            <el-input v-model="item.title" />
                        </template>
                        <template #addButton>
                            <el-button @click="createFeature(true)"
                                >Добавить плюс</el-button
                            >
                        </template>
                    </CommonSubentityList>
                    <CommonSubentityList v-model="minusFeatures" title="Минусы">
                        <template #default="{ item }">
                            <el-input v-model="item.title" />
                        </template>
                        <template #addButton>
                            <el-button @click="createFeature(false)"
                                >Добавить минус</el-button
                            >
                        </template>
                    </CommonSubentityList>
                </div>
            </el-tab-pane>
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

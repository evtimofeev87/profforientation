<template>
    <div class="rounded-3xl bg-slate-100 p-6">
        <div
            class="rounded-2xl border border-slate-200 mb-4 bg-white p-4"
            v-for="(item, index) in filtered"
            :key="index"
        >
            <slot :item="item" :deleteItem="deleteItem" />
            <el-button class="mt-4" @click="deleteItem(item)"
                >Удалить</el-button
            >
        </div>

        <slot name="addButton"></slot>
    </div>
</template>

<script setup lang="ts">
import { deleteSubentity } from '~/utils/common'

const items = defineModel<Record<string, any>[]>()

const filtered = computed(() => {
    if (!items.value) return []
    return items.value.filter((s) => !s._deleted)
})

function deleteItem(item: Record<string, any>) {
    if (!items.value) return
    const newVal = deleteSubentity(items.value, item)
    items.value = newVal
}
</script>

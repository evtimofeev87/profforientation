<template>
    <div class="flex flex-col h-full">
        <div class="flex-grow flex-shrink h-0 overflow-scroll">
            <slot></slot>
        </div>
        <div class="pt-4 border-t border-slate-300">
            <el-button @click="onCancel">Отмена</el-button>
            <el-button type="primary" @click="onSave">{{
                saveLabel
            }}</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    onCancel: () => void
    onSave: () => void
    saveLabel: string
}

defineProps<Props>()
</script>

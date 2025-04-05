<template>
    <div class="item">
        <img :src="props.isCons ? consIcon : prosIcon" alt="" />
        <p class="label">{{ props.label }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    isCons?: boolean
    label?: string
}

const props = withDefaults(defineProps<Props>(), {
    isCons: false,
    label: 'Нужно кодить',
})

const prosIcon = '/icons/pros.svg'
const consIcon = '/icons/cons.svg'
</script>

<style scoped>
.item {
    display: flex;
    gap: 6px;
    align-items: center;
}
</style>

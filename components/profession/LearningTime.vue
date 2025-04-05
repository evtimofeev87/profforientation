<template>
    <div class="common__light-card">
        <div class="text-block">
            <p class="common__label">Изучение</p>
            <p class="common__value">{{ periodString }}</p>
        </div>
        <CommonLevelMeter />
    </div>
</template>

<script setup lang="ts">
import { CommonLevelMeter } from '#components'
import { computed } from 'vue'

interface Props {
    min?: number
    max?: number
}

const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: 100,
})

const periodString = computed<string>(() => {
    return `${props.min} - ${props.max} мес.`
})
</script>

<style scoped>
.text-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}
</style>

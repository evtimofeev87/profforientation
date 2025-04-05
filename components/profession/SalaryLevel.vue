<template>
    <div class="common__light-card">
        <div class="text-block">
            <p class="common__label">Зарплата</p>
            <p class="common__value">{{ salaryString }}</p>
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
    max: 1000000,
})

const salaryString = computed<string>(() => {
    return `${toMoney(props.min)} - ${toMoney(props.max)}`
})
</script>

<style scoped>
.text-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}
</style>

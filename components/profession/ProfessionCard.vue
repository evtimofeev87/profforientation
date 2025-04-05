<template>
    <div class="profession-card common__grey-card">
        <ProfessionBadge />
        <p class="common__card-title" style="margin-top: 20px">asf</p>
        <ProfessionSalaryLevel style="margin-top: 20px" />
        <ProfessionDifficultyLevel style="margin-top: 12px" />
    </div>
</template>

<script setup lang="ts">
import { LevelColor } from '~/types/common'

interface Props {
    levelColor?: LevelColor
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
.profession-card {
    width: 100%;
}
</style>

<template>
    <ElIcon class="cursor-pointer">
        <component :is="IconComponent" v-if="IconComponent" />
        <span v-else>⚠️ Иконка не найдена</span>
    </ElIcon>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as Icons from '@element-plus/icons-vue'

const props = withDefaults(
    defineProps<{
        icon?: string
    }>(),
    {
        icon: 'House',
    }
)

const IconComponent = computed(() => Icons[props.icon] || null)
</script>

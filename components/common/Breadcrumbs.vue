<template>
    <div class="breadcrumbs">
        <template v-for="(breadcrumb, index) in props.breadcrumbs" :key="index">
            <template v-if="index < props.breadcrumbs.length - 1">
                <NuxtLink :to="breadcrumb.path">
                    <span class="breadcrumb">{{ breadcrumb.label }}</span>
                </NuxtLink>
                <img src="/icons/chevron-right.svg" alt="" />
            </template>
            <template v-else>
                <span class="breadcrumb active">{{ breadcrumb.label }}</span>
            </template>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '~/types/common'

interface Props {
    breadcrumbs?: Breadcrumb[]
}

const props = withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
})
</script>

<style scoped>
.breadcrumbs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.breadcrumb {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #808080;
    cursor: pointer;
}

.breadcrumb.active {
    color: #303030;
    cursor: unset;
}
</style>

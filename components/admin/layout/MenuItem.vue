<template>
    <NuxtLink
        :to="to"
        class="hover:opacity-75 transition-opacity"
        active-class="text-yellow-600"
        >{{ label }}</NuxtLink
    >
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
    to: RouteLocationRaw
    label: String
}>()
</script>

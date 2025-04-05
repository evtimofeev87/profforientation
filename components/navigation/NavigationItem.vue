<template>
    <NuxtLink :to="props.to">
        <div class="nav-item" :class="{ active: route.name === pageName }">
            {{ label }}
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    label?: string
    pageName?: string
    to?: string
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    pageName: '',
    to: '/',
})

const route = useRoute()
</script>

<style>
.nav-item {
    padding: var(--button-padding);
    background: var(--dark-color);
    color: white;
    border-radius: 96px;
    cursor: pointer;
}

.nav-item.active {
    background: var(--primary-color);
    color: black;
}
</style>

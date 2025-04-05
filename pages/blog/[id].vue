<template>
    <main class="main" style="margin-top: 43px">
        <div class="content">
            <CommonBreadcrumbs :breadcrumbs="breadcrumbs" />
            <BlogArticleHero style="margin-top: 20px" />
            <BlogArticleContent style="margin-top: 32px" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Breadcrumb } from '~/types/common'
definePageMeta({
    name: 'post',
})

const breadcrumbs = ref<Breadcrumb[]>([
    {
        label: 'Главная',
        path: '/',
    },
    {
        label: 'Блог',
        path: '/blog',
    },
    {
        label: 'Как подготовиться и пройти собеседование без опыта',
        path: '/blog/2345',
    },
])
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    width: 100%;
    max-width: var(--home-content-width);
}
</style>

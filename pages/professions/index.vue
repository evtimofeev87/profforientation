<template>
    <main class="main" style="margin-top: 43px">
        <div class="content">
            <ProfessionFilter />
            <div>
                <p class="title">Профессии</p>
                <CommonCategoryFilter
                    v-model="currentCategory"
                    :category-list="categoryList"
                />
                <div class="profession-list">
                    <ProfessionCard class="profession-card" />
                    <ProfessionCard class="profession-card" />
                    <ProfessionCard class="profession-card" />
                    <ProfessionCard class="profession-card" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { CategoryItem, CategoryModel } from '~/types/common'

definePageMeta({
    name: 'professions-list',
})

const categoryList: CategoryItem[] = [
    {
        label: 'Все статьи',
        value: null,
    },
    {
        label: 'Личный опыт',
        value: 'Личный опыт',
    },
    {
        label: 'Полезное',
        value: 'Полезное',
    },
]

const currentCategory = ref<CategoryModel>(null)
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

    display: flex;
    gap: 23px;
}

.profession-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 20px;
}

.profession-card {
    width: 306px;
}

.title {
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0%;
    text-transform: uppercase;
    margin-bottom: 20px;
}
</style>

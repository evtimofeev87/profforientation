<template>
    <div class="category-filter">
        <span
            class="category"
            v-for="(category, index) in categoryList"
            :key="index"
            @click="model = category.value"
            :class="{ active: category.value === model }"
            >{{ category.label }}</span
        >
    </div>
</template>

<script setup lang="ts">
import type { CategoryItem, CategoryModel } from '~/types/common'

interface Props {
    categoryList?: CategoryItem[]
}

const props = withDefaults(defineProps<Props>(), {
    categoryList: () => [],
})

const model = defineModel<CategoryModel>()
</script>

<style scoped>
.category-filter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 13px;
}

.category {
    line-height: 24px;
    padding: 8px 16px;
    border-radius: 16px;
    background: #f5f7f9;
    cursor: pointer;
}

.category.active {
    background: #adee84;
}
</style>

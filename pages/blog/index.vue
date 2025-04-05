<template>
    <main class="main" style="margin-top: 43px">
        <!-- <div class="content">
            <p class="title">Блог</p>
            <SearchBlock style="margin-top: 20px" />
            <CommonCategoryFilter
                v-model="currentCategory"
                :category-list="categoryList"
                style="margin-top: 20px"
            />
            <div v-if="status === 'pending'">Загрузка</div>
            <BlogArticlesBlock v-else :posts="posts" style="margin-top: 32px" />
        </div> -->
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'blog',
})
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

.title {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: var(--dark-color);
}
</style>

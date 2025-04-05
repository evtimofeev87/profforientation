<template>
    <div class="articles-block">
        <BlogArticleCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script setup lang="ts">
import type { PostRDO } from '~/prisma/modules/post'

withDefaults(
    defineProps<{
        posts?: PostRDO[]
    }>(),
    {
        posts: () => [],
    }
)
</script>

<style>
.articles-block {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
</style>

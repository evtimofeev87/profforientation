<template>
    <NuxtLink :to="{ name: 'user-id', params: { id: post.id } }">
        <template v-if="isBig">
            <div class="card-big card">
                <img class="image-big" :src="post.image || bigImage" alt="" />
                <p class="category-big" style="margin-top: 16px">
                    {{ post.categoryId }}
                </p>
                <p class="title-big" style="margin-top: 12px">
                    {{ post.title }}
                </p>
                <p class="subtitle-big" style="margin-top: 12px">
                    {{ post.subtitle }}
                </p>
            </div>
        </template>
        <template v-else>
            <div class="card-small card">
                <img
                    class="image-small"
                    :src="post.image || smallImage"
                    alt=""
                />
                <p class="category-small" style="margin-top: 8px">
                    {{ post.categoryId }}
                </p>
                <p class="title-small" style="margin-top: 6px">
                    {{ post.title }}
                </p>
                <p class="subtitle-small" style="margin-top: 6px">
                    {{ post.subtitle }}
                </p>
            </div>
        </template>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PostRDO } from '~/prisma/modules/post'

interface Props {
    isBig?: boolean
    post: PostRDO
}

const props = withDefaults(defineProps<Props>(), {
    isBig: false,
})

const bigImage = ref('/images/article-big-default.png')
const smallImage = ref('/images/article-small-default.png')
</script>

<style scoped>
.card {
    cursor: pointer;
}

.card-big {
    width: 639px;
    border-radius: 24px;
    padding: 44px;
    background: #f5f7f9;
}
.card-small {
    width: 305px;
    border-radius: 12px;
    padding: 20px 23px;
    background: #f5f7f9;
}

.image-big {
    width: 100%;
    height: 369px;
    border-radius: 12px;
    object-fit: cover;
}
.image-small {
    width: 100%;
    height: 173px;
    border-radius: 6px;
    object-fit: cover;
}

.category-big {
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #9747ff;
}
.category-small {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0%;
    color: #9747ff;
}

.title-big {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0%;
    color: black;
}
.title-small {
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: black;
}

.subtitle-big {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0%;
    color: black;
}
.subtitle-small {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: black;
}
</style>

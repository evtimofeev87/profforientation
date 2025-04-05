<template>
    <div class="article-navigation">
        <p class="title" style="margin-bottom: 32px">Навигация</p>
        <NuxtLink to="#subtitle1" class="link"
            ><p class="subtitle active">Подзаголовок 1</p></NuxtLink
        >
        <NuxtLink to="#subtitle2" class="link"
            ><p class="subtitle">Подзаголовок 2</p></NuxtLink
        >
        <NuxtLink to="#subtitle3" class="link"
            ><p class="subtitle">Подзаголовок 3</p></NuxtLink
        >
        <NuxtLink to="#subtitle4" class="link"
            ><p class="subtitle">Подзаголовок 4</p></NuxtLink
        >
    </div>
</template>

<style scoped>
.article-navigation {
    width: 400px;
    padding: 32px 20px;
    border-radius: 24px;
    background: #f5f7f9;
    flex-shrink: 0;
    position: sticky;
    top: 32px;
    max-height: calc(100vh - 64px);
    overflow: scroll;
}

.title {
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0px;
    color: #303030;
}

.subtitle {
    color: #303030;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    padding-left: 16px;
    cursor: pointer;
}

.link + .link {
    margin-top: 21px;
    display: block;
}

.subtitle.active {
    font-weight: 700;
    border-left: 3px solid #45b6fc;
}
</style>

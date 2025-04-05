<template>
    <div style="margin-top: 187px">
        <p class="title">
            Практические советы, варианты <br />смены профессии и интервью
        </p>
        <div class="articles" style="margin-top: 52px">
            <BlogArticleCard is-big />
            <BlogArticleCard is-big />
        </div>
    </div>
</template>

<style scoped>
.articles {
    display: flex;
    gap: 21px;
}

.title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: var(--dark-color);
}
</style>

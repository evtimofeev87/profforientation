<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const isAdmin = computed(() => route.path.startsWith('/admin'))

const layout = computed(() => (isAdmin.value ? 'admin' : 'default'))
</script>

<style lang="scss">
:root {
    --home-content-width: 1296px;

    --content-inline-padding: 10px;
    --button-padding: 16px 26px;

    --primary-color: #adee84;
    --dark-color: #303030;
    --grey-color: #808080;
    --highlight-color: #9747ff;

    --low-level-color: #95dc68;
    --mid-level-color: #f0da80;
    --high-level-color: #f18b6f;
    --none-level-color: #efefef;
}

@font-face {
    font-family: 'Nunito Sans';
    src: url('/fonts/NunitoSans-Variable.ttf') format('truetype');
    font-weight: 200 900;
}

body {
    font-family: Nunito Sans;
    color: var(--dark-color);
}

p {
    margin: 0;
}

a {
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

.common__highlight {
    color: var(--highlight-color);
}

.common__btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 96px;
    padding: var(--button-padding);
}

.common__btn:hover {
    opacity: 0.8;
}

.common__btn-plain {
    @extend .common__btn;
    background: #303030;
    color: white;
}

.common__btn-primary {
    @extend .common__btn;
    background: var(--primary-color);
    color: black;
}

.common__light-card {
    border-radius: 12px;
    padding: 12px;
    background: white;
}

.common__grey-card {
    border-radius: 20px;
    padding: 23px 21px;
    background: #f5f7f9;
}

.common__label {
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: var(--dark-color);
}

.common__value {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: var(--grey-color);
}

.common__card-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0%;
    color: var(--dark-color);
}

.common__card-hint {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #575757;
}
</style>

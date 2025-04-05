<template>
    <main class="main" style="margin-top: 81px">
        <HomeHero />
        <HomeProfessions />
        <HomeProforientation />
        <HomeStatistics />
        <!-- <HomeArticles /> -->
    </main>
</template>

<script setup>
definePageMeta({
    name: 'home',
})
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

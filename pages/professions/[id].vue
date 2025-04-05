<template>
    <main class="main" style="margin-top: 24px">
        <div class="wrapper">
            <p class="to-catalog">
                <img src="/icons/arrow.svg" alt="" />
                <span>В каталог</span>
            </p>
            <div class="content" style="margin-top: 33px">
                <ProfessionSidebar />
                <ProfessionInfoblock />
            </div>
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    name: 'profession',
})
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    padding-block: 20px;
}
.wrapper {
    max-width: var(--home-content-width);
    flex-grow: 1;
}

.content {
    display: grid;
    grid-template-columns: 306px 1fr;
    gap: 24px;
}

.to-catalog {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #303030;
}

.to-catalog img {
    transform: rotate(180deg);
}

.profession-info {
    /* flex-grow: 1; */
}
</style>

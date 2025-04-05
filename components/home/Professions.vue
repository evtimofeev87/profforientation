<script setup lang="ts">
import { LevelColor } from '~/types/common'
</script>

<template>
    <div class="wrapper">
        <p class="heading">
            Мы <span class="common__highlight">не</span> онлайн-школа <br />Мы
            <span class="common__highlight">не</span> продаем курсы
        </p>
        <p class="hint">
            Если вам не нравится текущая работа, и хочется открыть для себя
            новые возможности — посмотрите список востребованных и в то же время
            доступных профессий.
        </p>

        <div class="professions-block" style="margin-top: 45px">
            <ProfessionCard :level-color="LevelColor.GREEN" />
            <ProfessionCard :level-color="LevelColor.GREEN" />
            <ProfessionCard :level-color="LevelColor.GREEN" />
        </div>
        <NuxtLink to="/professions" style="margin-top: 45px">
            <div style="margin-top: 45px" class="common__btn-primary">
                Посмотреть все профессии
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>
.wrapper {
    margin-top: 156px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--home-content-width);
}

.heading {
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0%;
    text-transform: uppercase;
}

.hint {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: var(--text-color);
    margin-top: 28px;
}

.professions-block {
    width: 100%;
    display: flex;
    gap: 24px;
}
</style>

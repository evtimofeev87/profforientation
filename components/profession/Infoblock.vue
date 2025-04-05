<script setup lang="ts">
import TaskExample from './TaskExample.vue'
</script>

<template>
    <div class="profession-info">
        <div class="profession-info__heading">
            <span class="profession-title">Программист</span>
            <span class="profession-badge">Нужно кодить</span>
        </div>
        <ProfessionDescription style="margin-top: 24px" />
        <ProfessionProsCons style="margin-top: 36px" />
        <TaskExample style="margin-top: 68px" />
    </div>
</template>

<style scoped>
.profession-info__heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
}

.profession-title {
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #303030;
}

.profession-badge {
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: white;
    background-color: #8278dc;
    padding: 8px 16px;
    border-radius: 96px;
}
</style>

<script setup lang="ts"></script>

<template>
    <div class="filter">
        <ProfessionFilterSlider class="filter-item" />
        <ProfessionFilterRadio class="filter-item" />
    </div>
</template>

<style scoped>
.filter {
    width: 305px;
    border-radius: 44px;
    padding: 22px;
    flex-grow: 0;
    flex-shrink: 0;
    background: #303030;
}

.filter-item + .filter-item {
    margin-top: 16px;
}
</style>

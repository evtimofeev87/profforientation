<script setup lang="ts">
import MenuItem from './MenuItem.vue'
</script>

<template>
    <div class="p-[24px]">
        <div class="flex flex-col gap-4 text-[18px] font-bold">
            <AdminLayoutMenuItem
                :to="{ name: 'admin-posts-list' }"
                label="Посты"
            />
            <AdminLayoutMenuItem
                :to="{ name: 'admin-professions-list' }"
                label="Профессии"
            />
            <AdminLayoutMenuItem
                :to="{ name: 'admin-filters-list' }"
                label="Фильтры"
            />
            <AdminLayoutMenuItem
                :to="{ name: 'admin-proforientation' }"
                label="Профориентация"
            />
            <AdminLayoutMenuItem
                :to="{ name: 'admin-feeds-list' }"
                label="Фиды"
            />
        </div>
    </div>
</template>

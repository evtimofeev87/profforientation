<template>
    <div class="radio-item">
        <div class="radio-item__circle" :class="{ active: props.active }"></div>
        <span class="radio-item__label">Сложный</span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    active: false,
})
</script>

<style>
.radio-item {
    display: inline-flex;
    gap: 11px;
    align-items: center;
    justify-content: start;
    cursor: pointer;
}

.radio-item__circle {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(178, 219, 249, 0.16);
    border-radius: 50%;
}

.radio-item__circle.active {
    background: #8278dc;
    border: 7px solid #adee84;
}

.radio-item__label {
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: white;
}
</style>

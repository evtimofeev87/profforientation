<template>
    <div class="badge">
        <div class="icon"></div>
        <p class="label">Нужно кодить</p>
    </div>
</template>

<style scoped>
.badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    background: white;
    border-radius: 10px;
}

.icon {
    width: 24px;
    height: 24px;
    background: #d9d9d9;
}

.label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: var(--dark-color);
}
</style>

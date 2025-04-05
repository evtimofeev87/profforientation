<template>
    <div class="sidebar">
        <div class="sidebar-section">
            <p class="sidebar-title">О профессии</p>
            <div class="sidebar-block">
                <ProfessionDifficultyLevel />
                <ProfessionLearningTime />
            </div>
        </div>
        <div class="sidebar-section">
            <p class="sidebar-title">Зарплата</p>
            <div class="sidebar-block">
                <ProfessionSalaryLevel />
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 20px;
    background: hsl(210, 25%, 97%);
    padding: 23px 21px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.sidebar-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0%;
    color: #303030;
    margin-bottom: 16px;
}

.sidebar-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>

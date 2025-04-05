<template>
    <div class="article-hero">
        <img class="hero-image" src="/images/article-main-default.png" alt="" />
        <div class="hero-block">
            <p class="title">
                Как подготовиться и пройти<br />собеседование без опыта
            </p>
            <p class="hint" style="margin-top: 20px">
                Как эффективно представить свои навыки, адаптировать опыт<br />из
                других областей и привлечь внимание работодателя
            </p>
            <div class="info" style="margin-top: 20px">
                <p class="category">Личный опыт</p>
                <div class="info-item">
                    <img class="info-icon" src="/icons/calendar.svg" alt="" />
                    <span class="info-text">12.12.2024</span>
                </div>
                <div class="info-item">
                    <img class="info-icon" src="/icons/waiting.svg" alt="" />
                    <span class="info-text">8 минут на чтение</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article-hero {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
}

.hero-image {
    width: 100%;
    object-fit: cover;
}

.hero-block {
    width: 100%;
    position: absolute;
    padding: 33px;
    bottom: 0;
    background: linear-gradient(
        0deg,
        #000000 -14.04%,
        rgba(0, 0, 0, 0.303361) 71.93%,
        rgba(0, 0, 0, 0) 100%
    );
}

.title {
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: white;
}

.hint {
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: white;
}

.info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
}

.category {
    color: #303030;
    background: white;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    border-radius: 96px;
}

.info-item {
    display: inline-flex;
    gap: 3px;
}

.info-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #808080;
}
</style>

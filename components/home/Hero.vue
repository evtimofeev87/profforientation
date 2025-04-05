<template>
    <div class="hero">
        <p class="heading">Смена профессии<br />Найти своё призвание</p>
        <img
            class="hero-image"
            style="margin-top: 24px"
            src="/images/hero.png"
            alt=""
        />

        <div class="hint-block" style="margin-top: 32px">
            <p class="hint">
                Подберём профессию по душе и расскажем обо всех <br />
                способах её освоить, в том числе и о бесплатных
            </p>
            <NuxtLink to="/professions">
                <div class="common__btn-primary">
                    <span>Каталог профессий</span>
                    <img src="/icons/arrow.svg" alt="" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.hero {
    max-width: var(--home-content-width);
}

.heading {
    font-weight: 700;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0%;
    color: var(--text-color);
    text-transform: uppercase;
}

.landing__primary-button {
    background: var(--primary-color);
    color: black;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 96px;
    padding: var(--button-padding);
}

.hint-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hint {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0%;
}

.hero-image {
    width: 100%;
}
</style>

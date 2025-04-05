<template>
    <header class="header">
        <div class="wrapper">
            <NuxtLink to="/">
                <div class="logo-section">
                    <img class="logo-image" src="/images/logo.png" alt="" />
                    <span class="logo-text">Название</span>
                </div>
            </NuxtLink>
            <Navigation />
        </div>
    </header>
    <slot></slot>
    <footer></footer>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-inline: var(--content-inline-padding);
}

.wrapper {
    max-width: var(--home-content-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}

.logo-section {
    display: flex;
    gap: 10px;
    align-items: center;
}

.logo-text {
    font-family: Nunito Sans;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
    color: #001969;
}
</style>

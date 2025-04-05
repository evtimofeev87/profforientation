<template>
    <div>
        <p class="title">Плюсы и минусы профессии</p>
        <div class="pros-cons">
            <div class="pros-cons__item">
                <ProfessionProsConsItem
                    label="adsfasdfasdfasdfaasdfasdfsdfasdfasdfafs"
                />
                <ProfessionProsConsItem />
                <ProfessionProsConsItem />
            </div>
            <div class="pros-cons__item">
                <ProfessionProsConsItem is-cons />
                <ProfessionProsConsItem is-cons />
                <ProfessionProsConsItem is-cons />
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0%;
    margin-bottom: 20px;
}

.pros-cons {
    display: grid;
    grid-template-columns: minmax(306px, max-content) minmax(306px, max-content);
    gap: 25px;
}

.pros-cons__item {
    background: #f5f7f9;
    border-radius: 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
}
</style>

<template>
    <div class="radio">
        <p class="title" style="margin-bottom: 20px">Уровень сложности</p>
        <ProfessionFilterRadioItem class="item" />
        <ProfessionFilterRadioItem class="item" active />
    </div>
</template>

<style scoped>
.radio {
    border-radius: 22px;
    padding: 16px;
    background: #373737;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.title {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #ffffff;
}

.item + .item {
    margin-top: 20px;
}
</style>

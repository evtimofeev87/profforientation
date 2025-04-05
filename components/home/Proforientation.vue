<template>
    <div id="proforientation" class="proforientation" style="margin-top: 247px">
        <p class="title">Поможем определиться <br />с ПРОФЕССИЕЙ</p>
        <p class="hint" style="margin-top: 20px">
            Ответьте на несколько вопроосов и узнайте, <br />какое направление
            вам подходит
        </p>
        <div class="question-block" style="margin-top: 40px">
            <p class="question">Я предпочитаю</p>
            <div class="answers-block">
                <div class="answer-wrapper" style="margin-top: 24px">
                    <p class="answer">
                        Работать самостоятельно и не зависеть от других
                    </p>
                </div>
                <div class="answer-wrapper" style="margin-top: 24px">
                    <p class="answer">
                        Работать самостоятельно и не зависеть от других
                    </p>
                </div>
                <div class="answer-wrapper" style="margin-top: 24px">
                    <p class="answer">
                        Работать самостоятельно и не зависеть от других
                    </p>
                </div>
            </div>
            <img class="decor1" src="/images/decor1.svg" alt="" />
            <img class="decor2" src="/images/decor2.svg" alt="" />
            <img class="decor3" src="/images/decor3.svg" alt="" />
        </div>
    </div>
</template>

<style scoped>
.proforientation {
    width: 100%;
    padding: 64px 0;
    background: #f5f7f9;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: var(--dark-color);
}

.hint {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
}

.question-block {
    position: relative;
    width: 100%;
    max-width: 787px;
    gap: 24px;
    border-radius: 20px;
    padding: 32px;
    background: white;
}

.question {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0%;
    color: var(--dark-color);
}

.answers-block {
    display: flex;
    flex-direction: column;
}

.answer-wrapper {
    width: 723;
    gap: 10px;
    border-radius: 12px;
    padding: 20px;
    background: #f5f5f5;
    cursor: pointer;
}

.answer {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0%;
    color: var(--dark-color);
}

.decor1 {
    position: absolute;
    top: -48px;
    left: -314px;
}

.decor2 {
    position: absolute;
    top: -353px;
    right: -298px;
}

.decor3 {
    position: absolute;
    bottom: 54px;
    right: -150px;
}
</style>

<template>
    <div class="slider">
        <p class="title" style="margin-bottom: 20px">Зарплата</p>

        <div class="slider-wrapper" style="margin-bottom: 16px">
            <ElSlider
                class="range-slider"
                v-model="slider"
                range
                show-stops
                :max="10"
            />
        </div>
        <div class="inputs-wrapper">
            <el-input
                class="input"
                v-model="value1"
                style="width: 240px"
                placeholder="Please input"
            />
            <el-input
                class="input"
                v-model="value2"
                style="width: 240px"
                placeholder="Please input"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const slider = ref(0)
const value1 = ref(0)
const value2 = ref(0)
</script>

<style lang="scss">
.range-slider {
    .el-slider__runway {
        background: rgba(127, 140, 153, 0.35) !important;
    }

    .el-slider__bar {
        background: #8278dc;
    }

    .el-slider__stop {
        display: none;
    }

    .el-slider__button {
        width: 24px;
        height: 24px;
        border: none;
        background: #adee84;
    }
}

.input {
    .el-input__wrapper {
        border-radius: 16px;
        padding: 10px 12px;
        border: 1px solid rgba(127, 140, 153, 0.35);
        background: #424447;
        color: rgba(150, 159, 168, 1);
        box-shadow: none;
    }

    .el-input__inner {
        height: 24px;
    }
}
</style>

<style scoped lang="scss">
.slider {
    border-radius: 22px;
    padding: 16px;
    background: #373737;
}

.title {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #ffffff;
}

.sliders-block {
    position: relative;
}

.sliders-block input {
    position: absolute;
    top: 0;
}

.slider-wrapper {
    margin-inline: 12px;
}

.inputs-wrapper {
    display: flex;
    gap: 12px;
}
</style>

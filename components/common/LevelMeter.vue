<template>
    <div class="level-meter">
        <div
            v-for="itemClass in itemsList"
            class="item"
            :class="itemClass"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { LevelColor } from '~/types/common'
import { computed } from 'vue'

interface Props {
    levelColor?: LevelColor
    currentValue?: number
    totalValue?: number
}

const props = withDefaults(defineProps<Props>(), {
    levelColor: LevelColor.RED,
    currentValue: 0,
    totalValue: 5,
})

const colorMap = {
    [LevelColor.RED]: 'red',
    [LevelColor.YELLOW]: 'yellow',
    [LevelColor.GREEN]: 'green',
}

const itemsList = computed<string[]>(() => {
    const _itemsList: string[] = []
    const color = colorMap[props.levelColor]
    for (let i = 1; i <= props.totalValue; i++) {
        const cssClass = i <= props.currentValue ? color : 'grey'
        _itemsList.push(cssClass)
    }

    return _itemsList
})
</script>

<style scoped>
.level-meter {
    width: 100%;
    display: flex;
    gap: 5px;
}

.item {
    border-radius: 4px;
    height: 6px;
    flex-grow: 1;
}

.red {
    background: var(--high-level-color);
}

.yellow {
    background: var(--mid-level-color);
}

.green {
    background: var(--low-level-color);
}

.grey {
    background: var(--none-level-color);
}
</style>

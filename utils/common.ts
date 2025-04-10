import { v4 as uuidv4 } from 'uuid'

export const toMoney = (value: number = 0): string => {
    return `${value.toLocaleString('ru-RU')} ₽`
}

export function createEmptyObject<T extends Record<string, any>>(): T {
    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries({} as T)) {
        if (typeof value === 'string') {
            result[key] = ''
        } else if (typeof value === 'number') {
            result[key] = 0
        } else if (typeof value === 'boolean') {
            result[key] = false
        } else if (Array.isArray(value)) {
            result[key] = []
        } else if (typeof value === 'object' && value !== null) {
            result[key] = createEmptyObject<any>()
        } else {
            result[key] = null
        }
    }

    return result as T
}

export function createNewSubentity<T extends { _tempId: string }>(): T {
    const result = {
        ...createEmptyObject<T>(),
        _tempId: uuidv4(),
    }
    return result
}

export function deleteSubentity(
    array: Record<string, any>[],
    item: Record<string, any>
): Record<string, any>[] {
    return array.reduce<Record<string, any>[]>((acc, curItem) => {
        if ('id' in curItem && curItem.id === item.id) {
            return [...acc, { ...curItem, _deleted: true }]
        }
        if ('_tempId' in curItem && curItem._tempId === item._tempId) {
            return acc
        }
        return [...acc, curItem]
    }, [])
}

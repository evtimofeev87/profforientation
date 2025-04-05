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

import { de } from 'element-plus/es/locales.mjs'

export type PrismaInput = {
    create?: any[]
    update?: { where: { id: number }; data: any }[]
    delete?: { id: number }[]
}

export function buildPrismaSubEntity(
    items: Record<string, any>[],
    excludedFields: string[] = []
): PrismaInput {
    const create: any[] = []
    const update: { where: { id: number }; data: any }[] = []
    const del: { id: number }[] = []

    for (const item of items) {
        console.log('before', JSON.stringify(item, null, 2))
        for (let key of excludedFields) {
            delete item[key]
        }
        console.log('after', JSON.stringify(item, null, 2))
        if ('_tempId' in item && !item.id && !item._deleted) {
            // Новая подсущность
            const { _tempId, _deleted, ...data } = item
            create.push(data)
        } else if (item.id && item._deleted) {
            // Удалённая
            del.push({ id: item.id })
        } else if (item.id) {
            // Обновление
            const { _tempId, _deleted, ...data } = item
            update.push({
                where: { id: item.id },
                data,
            })
        }
    }

    // return { create, update, delete: del }
    return {
        ...(create.length && { create }),
        ...(update.length && { update }),
        ...(del.length && { delete: del }),
    }
}

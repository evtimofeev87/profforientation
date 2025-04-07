export const enum LevelColor {
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    RED = 'RED',
}

export type CategoryModel = string | number | null

export type CategoryItem = {
    label: string
    value: CategoryModel
}

export type Breadcrumb = {
    label: string
    path: string
}

export type OmittedFields = 'id' | 'createdAt' | 'updatedAt' | '_deleted'

export type Pretty<T> = {
    [K in keyof T]: T[K]
} & {}

export type MakeCreate<T> = Pretty<Omit<T, OmittedFields>>

export type MakeUpdateSubEntity<T> = Pretty<T & { _deleted?: true }>

export type MakeCreateSubEntity<T> = Pretty<MakeCreate<T> & { _tempId: string }>

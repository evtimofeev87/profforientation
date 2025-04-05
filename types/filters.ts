import type { Filter, FilterOption } from '@prisma/client'
import type { MakeCreate } from './common'

export type UpdateFilterDTO = Filter
export type CreateFilterDTO = MakeCreate<UpdateFilterDTO>

export type UpdateFilterOptionDTO = FilterOption
export type CreateFilterOptionDTO = MakeCreate<FilterOption>

export type SelectedFiltersList = Record<string, string[]>

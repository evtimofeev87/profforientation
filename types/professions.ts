import type {
    Profession,
    ProfessionCategory,
    Feature,
    Skill,
} from '@prisma/client'
import type { MakeCreate, Pretty } from './common'
import type { SelectedFiltersList } from './filters'

export type UpdateProfessionDTO = Profession
export type CreateProfessionDTO = MakeCreate<UpdateProfessionDTO>

export type UpdateProfessionCategoryDTO = ProfessionCategory
export type CreateProfessionCategoryDTO = MakeCreate<ProfessionCategory>

export type UpdateFeatureDTO = Feature
export type CreateFeatureDTO = MakeCreate<UpdateFeatureDTO>

export type UpdateSkillDTO = Skill
export type CreateSkillDTO = MakeCreate<UpdateSkillDTO>

export type GetFilteredProfessionsPayload = {
    selectedFiltersList: SelectedFiltersList
    professionCategoryId: string
}

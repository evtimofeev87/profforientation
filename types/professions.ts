import type {
    Profession,
    ProfessionCategory,
    Feature,
    Skill,
} from '@prisma/client'
import type {
    MakeCreate,
    MakeCreateSubEntity,
    MakeUpdateSubEntity,
    Pretty,
} from './common'
import type { SelectedFiltersList } from './filters'

export type UpdateProfessionDTO = Pretty<
    Profession & {
        skills?: (UpdateSkillDTO | CreateSkillDTO)[]
        features?: (UpdateFeatureDTO | CreateFeatureDTO)[]
    }
>
export type CreateProfessionDTO = MakeCreate<UpdateProfessionDTO>

export type UpdateProfessionCategoryDTO = ProfessionCategory
export type CreateProfessionCategoryDTO = MakeCreate<ProfessionCategory>

export type UpdateFeatureDTO = MakeUpdateSubEntity<Feature>
export type CreateFeatureDTO = MakeCreateSubEntity<UpdateFeatureDTO>

export type UpdateSkillDTO = MakeUpdateSubEntity<Skill>
export type CreateSkillDTO = MakeCreateSubEntity<UpdateSkillDTO>

export type GetFilteredProfessionsPayload = {
    selectedFiltersList: SelectedFiltersList
    professionCategoryId: string
}

import { PostModel } from './post'
import { PostCategoryModel } from './postCategory'
import { FilterModel } from './filter'
import { FilterOptionModel } from './filterOption'
import { ProfessionModel } from './profession'
import { ProfessionCategoryModel } from './professionCategory'
import { FeatureModel } from './feature'
import { SkillModel } from './skill'
import { ProfQuestionModel } from './profQuestion'
import { ProfOptionModel } from './profOption'
import { FeedModel } from './feed'
import { FeedBadgeModel } from './feedBadge'
import { FeedTagModel } from './feedTag'

export const DB = {
    Post: PostModel,
    PostCategory: PostCategoryModel,
    Filter: FilterModel,
    FilterOption: FilterOptionModel,
    Profession: ProfessionModel,
    ProfessionCategory: ProfessionCategoryModel,
    Feature: FeatureModel,
    Skill: SkillModel,
    ProfQuestion: ProfQuestionModel,
    ProfOption: ProfOptionModel,
    Feed: FeedModel,
    FeedBadge: FeedBadgeModel,
    FeedTag: FeedTagModel,
}

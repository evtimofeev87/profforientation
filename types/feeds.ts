import type { Feed, FeedBadge, FeedTag } from '@prisma/client'
import type { MakeCreate } from './common'

export type UpdateFeedDTO = Feed
export type CreateFeedDTO = MakeCreate<UpdateFeedDTO>

export type UpdateFeedBadgeDTO = FeedBadge
export type CreateFeedBadgeDTO = MakeCreate<FeedBadge>

export type UpdateFeedTagDTO = FeedTag
export type CreateFeedTagDTO = MakeCreate<FeedTag>

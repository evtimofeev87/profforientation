import type { Post, PostCategory } from '@prisma/client'
import type { MakeCreate } from './common'

export type UpdatePostDTO = Post
export type CreatePostDTO = MakeCreate<Post>

export type UpdatePostCategoryDTO = PostCategory
export type CreatePostCategoryDTO = MakeCreate<PostCategory>

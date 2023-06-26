import { createAction, props } from '@ngrx/store';
import { Post } from "../../core/model/post.model";

const loadPosts = createAction(
  '[Blog] Load Posts',
);

const loadPostsSuccess = createAction(
  '[Blog] Load Posts Success',
  props<{ posts: Array<Post> }>(),
)

const loadPostsFailure = createAction(
  '[Blog] Load Posts Failure',
  props<{ error: unknown }>(),
)

export const BlogActions = {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure
}
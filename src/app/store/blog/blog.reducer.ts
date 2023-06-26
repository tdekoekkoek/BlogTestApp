import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogActions } from './blog.actions';
import { Post } from "../../core/model/post.model";

export const blogFeatureKey = 'blog';

export interface BlogState {
  loaded: boolean,
  latestPosts: Array<Post>;
}

const initialState: BlogState = {
  loaded: false,
  latestPosts: []
};

export const reducer = createReducer(
  initialState,
  on(BlogActions.loadPosts, state => state),
  on(BlogActions.loadPostsSuccess, (state, action) => {
    return {
      ...state,
      loaded: true,
      latestPosts: action.posts
    }

  }),
  on(BlogActions.loadPostsFailure, (state, action) => state),
);


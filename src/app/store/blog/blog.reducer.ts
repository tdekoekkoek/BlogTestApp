import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogActions } from './blog.actions';

export const blogFeatureKey = 'blog';

export interface State {
  x: boolean;
}

const initialState: State = {
  x: false
};

export const reducer = createReducer(
  initialState,
  on(BlogActions.loadBlogs, state => state),
  on(BlogActions.loadBlogsSuccess, (state, action) => state),
  on(BlogActions.loadBlogsFailure, (state, action) => state),
);

// export const blogFeature = createFeature({
//   name: blogFeatureKey,
//   reducer,
// });


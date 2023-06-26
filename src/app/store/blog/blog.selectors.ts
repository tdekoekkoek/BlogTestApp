import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBlog from './blog.reducer';

export const selectBlogState = createFeatureSelector<fromBlog.State>(
  fromBlog.blogFeatureKey
);

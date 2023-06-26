import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import * as fromBlog from './blog.reducer';
import { BlogState } from "./blog.reducer";

export const selectBlogState = createFeatureSelector<fromBlog.BlogState>(
  fromBlog.blogFeatureKey
);

const selectLatestPosts$ = createSelector(
  selectBlogState,
  (state: BlogState) => state.latestPosts
);

export const BlogSelectors = {
  selectLatestPosts$
}

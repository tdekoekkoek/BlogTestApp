import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { RootState } from "../../../store/app/app.reducer";
import { Store } from "@ngrx/store";
import { BlogActions } from "../../../store/blog/blog.actions";

export const latestPostsResolver: ResolveFn<boolean> = (
  route,
  state,
  store = inject(Store<RootState>)) =>
{
  store.dispatch(BlogActions.loadPosts());
  return true;
};


import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BlogActions } from './blog.actions';
import { BlogService } from "../../core/services/blog.service";

@Injectable()
export class BlogEffects {

  constructor(private actions$: Actions, private blogService: BlogService) {}

  loadPosts$ = createEffect(
    (actions$: Actions = inject(Actions), blogService: BlogService = inject(BlogService)) => {
      return actions$.pipe(
        ofType(BlogActions.loadPosts),
        mergeMap(() =>
          blogService.fetchPosts().pipe(
            map((response) => BlogActions.loadPostsSuccess({posts: response})),
            catchError(() => [])
          )
        )
      );
    },
    { functional: true }
  );

}

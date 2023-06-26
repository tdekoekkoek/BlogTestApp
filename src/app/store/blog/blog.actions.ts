import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const BlogActions = createActionGroup({
  source: 'Blog',
  events: {
    'Load Blogs': emptyProps(),
    'Load Blogs Success': props<{ data: unknown }>(),
    'Load Blogs Failure': props<{ error: unknown }>(),
  }
});

import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'Load Apps': emptyProps(),
    'Load Apps Success': props<{ data: unknown }>(),
    'Load Apps Failure': props<{ error: unknown }>(),
  }
});

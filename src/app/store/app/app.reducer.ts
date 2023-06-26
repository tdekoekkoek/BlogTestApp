import { createFeature, createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';

export const appFeatureKey = 'app';

export interface State {
  currentName: string;
}

export const initialState: State = {
  currentName: 'ABC'
};

export const reducer = createReducer(
  initialState,
  on(AppActions.loadApps, state => state),
  on(AppActions.loadAppsSuccess, (state, action) => state),
  on(AppActions.loadAppsFailure, (state, action) => state),
);

// export const appFeature = createFeature({
//   name: appFeatureKey,
//   reducer,
// });


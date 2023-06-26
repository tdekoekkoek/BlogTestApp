import { ActionReducerMap, createReducer, on } from '@ngrx/store';

export const appFeatureKey = 'app';

export interface RootState {
  app: AppState
}

export interface AppState {
  currentName: string;
}

export const initialState: AppState = {
  currentName: 'ABC'
};

export const reducer = createReducer(
  initialState,
);

export const reducers: ActionReducerMap<RootState> = {
  app: reducer,
};


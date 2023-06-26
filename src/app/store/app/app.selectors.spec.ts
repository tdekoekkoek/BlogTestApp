import * as fromApp from './app.reducer';
import { selectAppState } from './app.selectors';
import { AppState } from "./app.reducer";

describe('App Selectors', () => {

  const initialState: AppState = {
    currentName: 'XYZ'
  }

  it('should select the feature state', () => {
    const result = selectAppState({
      [fromApp.appFeatureKey]: initialState
    });

    expect(result).toEqual({
      currentName: 'XYZ'
    });
  });
});

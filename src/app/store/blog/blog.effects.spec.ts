import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BlogEffects } from './blog.effects';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('BlogEffects', () => {
  let actions$: Observable<any>;
  let effects: BlogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,],
      providers: [
        BlogEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BlogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { latestPostsResolver } from './latest-posts.resolver';

describe('latestPostsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => latestPostsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

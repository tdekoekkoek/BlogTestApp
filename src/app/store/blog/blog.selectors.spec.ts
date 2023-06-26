import * as fromBlog from './blog.reducer';
import { selectBlogState } from './blog.selectors';

describe('Blog Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBlogState({
      [fromBlog.blogFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

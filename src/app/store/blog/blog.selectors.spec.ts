import * as fromBlog from './blog.reducer';
import { selectBlogState } from './blog.selectors';
import { BlogState } from "./blog.reducer";

describe('Blog Selectors', () => {

  const initialState: BlogState = {
    loaded: true,
    latestPosts: [
      {
        id: 1,
        title: 'Hello World',
        body: 'This is the first blog post',
        userId: 55549,
      },
      {
        id: 2,
        title: 'Hello Again World',
        body: 'This is the second blog post',
        userId: 55549,
      },
    ]
  }

  it('should select the feature state', () => {
    const result = selectBlogState({
      [fromBlog.blogFeatureKey]: initialState
    });

    expect(result.latestPosts.length).toEqual(2);

  });
});

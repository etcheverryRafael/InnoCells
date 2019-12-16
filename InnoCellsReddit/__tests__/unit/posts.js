import PostsSort from '../../src/screens/main/postsList/PostsSort';

describe('Posts Comparison', () => {
  it('returns ordered posts by score (TOP)', () => {
    const posts = [
      {data: {title: 'POST 1', score: 7}},
      {data: {title: 'POST 2', score: 8}},
      {data: {title: 'POST 3', score: 9}},
    ];
    const orderedPostsArray = posts.sort(PostsSort.top);
    const expectedPostsArray = [
      {data: {title: 'POST 3', score: 9}},
      {data: {title: 'POST 2', score: 8}},
      {data: {title: 'POST 1', score: 7}},
    ];
    expect(orderedPostsArray).toEqual(expectedPostsArray);
  });

  it('returns ordered posts by score (NEW)', () => {
    const posts = [
      {data: {title: 'POST 1', created: 1576427922}},
      {data: {title: 'POST 2', created: 1576427923}},
      {data: {title: 'POST 3', created: 1576427924}},
    ];
    const orderedPostsArray = posts.sort(PostsSort.new);
    const expectedPostsArray = [
      {data: {title: 'POST 3', created: 1576427924}},
      {data: {title: 'POST 2', created: 1576427923}},
      {data: {title: 'POST 1', created: 1576427922}},
    ];
    expect(orderedPostsArray).toEqual(expectedPostsArray);
  });

  it('returns ordered posts by score (HOT)', () => {
    const posts = [
      {data: {title: 'POST 1', num_comments: 7}},
      {data: {title: 'POST 2', num_comments: 8}},
      {data: {title: 'POST 3', num_comments: 9}},
    ];
    const orderedPostsArray = posts.sort(PostsSort.hot);
    const expectedPostsArray = [
      {data: {title: 'POST 3', num_comments: 9}},
      {data: {title: 'POST 2', num_comments: 8}},
      {data: {title: 'POST 1', num_comments: 7}},
    ];
    expect(orderedPostsArray).toEqual(expectedPostsArray);
  });

  it('returns ordered posts by score (CONTROVERSIAL)', () => {
    const posts = [
      {data: {title: 'POST 1', num_comments: 7}},
      {data: {title: 'POST 2', num_comments: 8}},
      {data: {title: 'POST 3', num_comments: 9}},
    ];
    const orderedPostsArray = posts.sort(PostsSort.controversial);
    const expectedPostsArray = [
      {data: {title: 'POST 3', num_comments: 9}},
      {data: {title: 'POST 2', num_comments: 8}},
      {data: {title: 'POST 1', num_comments: 7}},
    ];
    expect(orderedPostsArray).toEqual(expectedPostsArray);
  });
});

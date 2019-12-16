import {REDDIT_BASE_URL} from '../../config/Constants';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED';
export const GET_POSTS_REJECTED = 'GET_POSTS_REJECTED';
export const SORT_BY = 'SORT_BY';

export const fetchPosts = () => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      const responsePromise = await fetch(REDDIT_BASE_URL + '/r/pics/new.json');
      const response = await responsePromise.json();
      dispatch(fetchPostsFulfilled(response.data.children));
    } catch (error) {
      console.log('Fetch Posts Action Error', error);
      dispatch(fetchPostsRejected(error.toString()));
    }
  };
};

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchPostsFulfilled = posts => {
  //Return a action type and a loading to false, and the data.
  return {
    type: GET_POSTS_FULFILLED,
    posts: posts,
    errorMessage: false,
  };
};

//Define a action creator that catches a error and sets an errorMessage
export const fetchPostsRejected = errorMessage => {
  //Return a action type and a payload with a error
  return {
    type: GET_POSTS_REJECTED,
    errorMessage: errorMessage,
  };
};

export const sortBy = option => {
  //Return a action type and a payload with a error
  return {
    type: SORT_BY,
    sortOption: option,
    errorMessage: false,
  };
};

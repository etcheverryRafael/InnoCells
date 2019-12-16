import {
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  RESET_SORT_PANEL,
  SORT_BY,
} from '../actions/posts-actions';

//Define your initialState
const initialState = {
  // Have a posts array responsible for getting the data and setting to the array.
  posts: [],
  // Have state for error message for recieving an error.
  errorMessage: false,
  // Sort Option managment.
  sortOption: 0,
};

const postsReducer = (state = initialState, action) => {
  console.log('action.type', action.type);
  switch (action.type) {
    case GET_POSTS_FULFILLED: {
      return {...state, posts: action.posts, errorMessage: action.errorMessage};
    }
    case GET_POSTS_REJECTED: {
      return {...state, errorMessage: action.errorMessage};
    }
    case RESET_SORT_PANEL: {
      return {...state, sortOption: action.sortOption};
    }
    case SORT_BY: {
      return {
        ...state,
        sortOption: action.sortOption,
        errorMessage: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;

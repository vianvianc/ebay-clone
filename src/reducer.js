import { ADD_POSTS, ADD_POST } from './actions'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    default:
      return state
  }
}
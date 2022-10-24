import superagent from "superagent";

export const ADD_POSTS = "ADD_POSTS";
export const ADD_POST = "ADD_POST";

export const addPosts = () => {
  return function(dispatch, getState) {
    if (!getState().post || getState().post.length === 0) {
      return superagent
        .get("https://still-hollows-81617.herokuapp.com/posts")
        .then(response => {
          dispatch({
            type: ADD_POSTS,
            payload: response.body
          });
        })
        .catch(console.error);
    }
  };
};

export const addOnePost = data => {
  return function(dispatch) {
    return superagent
      .post("https://still-hollows-81617.herokuapp.com/posts")
      .send(data)
      .then(response => {
        dispatch({
          type: ADD_POST,
          payload: response.body
        });
      })
      .catch(console.error);
  };
};

import { GET_POST } from "../types";

const initialState = {
  post: []
};

function getAllPost(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return Object.assign({}, state, { post: action.payload });
    default:
      return { ...state };
  }
}

export default getAllPost;

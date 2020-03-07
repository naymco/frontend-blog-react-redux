import { GET_JSON_HOME } from "../types";

const initialState = {
  jhome: []
};

function getJsonView(state = initialState, action) {
  switch (action.type) {
    case GET_JSON_HOME:
      return Object.assign({}, state, { jhome: action.payload });
    default:
      return { ...state };
  }
}

export default getJsonView;

import { ACTION_TYPES } from "../actions/dCandidate";
const initialState = {
   list: []
}
export const dCandidate = (state=initialState, action) => {
      switch(action.type) {
          case ACTION_TYPES.FETCH_ALL:
          return {
              ...state, // any other information stored inside we have to do this here
              list:[...action.payload]
          }
          default:
              return state;
      }
}
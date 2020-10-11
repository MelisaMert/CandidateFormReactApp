import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH'
}
// This function in most of the case you will see a simple syntax like this see a simple syntax 
// We have to make a get API request OK
// Actions write to store through with dispatch function
// Actions are javascript object

// api.dCandidate().fetchAll()
export const fetchAll = () => dispatch => {
  // get api req
  // payload : from your asp.net web api 
  api.dCandidate().fetchAll()
  .then(
      response => {
          console.log('Response', response);
          dispatch({
              type: ACTION_TYPES.FETCH_ALL,
              payload: response.data
          })
      }
  )
  .catch(err => console.log(err))
}

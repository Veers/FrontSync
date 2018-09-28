import * as types from './actionTypes';

function url() {
  return 'https://reqres.in/api/users?page=2';
}

export function receiveStuff(json) {
  console.log(json)
  return {type: types.RECEIVE_STUFF, stuff: json};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      headers: {
        // 'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)))
  };
}
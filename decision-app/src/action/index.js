import axios from "axios";
import _ from 'lodash'
export const FETCH_OPTIONS = "FETCH_ACTION";
export const HANDLE_CLICK_RANDOM = "HANDLE_CLICK_RANDOM";

export function fetch_Options() {
  const request = axios.get("http://localhost:3001/");
  return {
    type: FETCH_OPTIONS,
    payload: request
  };
}

export function delete_Options(id) {
  return axios.delete(`http://localhost:3001/${id}`).then(result => {
    return fetch_Options();
  });
}

export function submit(values) {
  return axios.post("http://localhost:3001/", values).then(result => {
    return fetch_Options();
  });
}

export function handleClickRandom(list) {
  var Random = _.random(list.data.length - 1);
  var selected = list.data[Random].option;
  return {
    type: HANDLE_CLICK_RANDOM,
    payload: {
      selected:selected,
      isOpen:true
    }
  };
}

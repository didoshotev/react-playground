import * as authorApi from "../../api/authorApi";
import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((err) => {
        console.error("Error while loadAuthors: ", err);
      });
  };
}

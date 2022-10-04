import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// Redux think injects dispatch so we don't have to
// Async/Non-Async calls will likely be the same
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        // dispatch another action so the app knows we are in error
        // loadCoursesFailure
        console.error("error while loadCourses: ", error);
      });
  };
}

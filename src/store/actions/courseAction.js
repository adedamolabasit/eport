import axios from "axios";

import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,

  COURSE_REGISTERED_REQUEST,
  COURSE_REGISTERED_SUCCESS,
  COURSE_REGISTERED_FAIL,
} from "../constants";


export const courseList = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data } = await axios.get(
      'http://localhost:8000/dashboard/courses'
    );
    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: COURSE_LIST_FAIL,
      payload:
        error.reponse && error.reponse.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }

};
export const courseRegisteredList = (studentId) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_REGISTERED_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8000/dashboard/courses/${studentId}`
    );
    dispatch({
      type: COURSE_REGISTERED_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: COURSE_REGISTERED_FAIL,
      payload:
        error.reponse && error.reponse.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }

};

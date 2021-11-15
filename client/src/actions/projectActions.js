import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
} from "../constants/projectConstants";

export const listProjects = () => async (dispatch) => {
  import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
  } from "./../constants/projectConstants";
  import Axios from "axios";
  dispatch({
    type: PROJECT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/projects");
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    type: PROJECT_LIST_FAIL;
    payload: error.message;
  }
};

export const createProject = () => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_CREATE_REQUEST,
  });
  try {
    const { data } = await Axios.post("/api.products", {});
    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload: message,
    });
  }
};

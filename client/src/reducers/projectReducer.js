import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
} from "./../constants/projectConstants";

export const projectListReducer = (
  state = { loading: true, projects: [] },
  action
) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_LIST_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      state;
  }
};

export const projectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

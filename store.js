import { createStore } from "redux"

const initialState = {
  user: {
    users: [],
  },
  currentPhoto: null,
  loading: false,
  error: false,
}
const actionTypes = {
  LOAD_USERS: "LOAD_USERS",
  ASYNC_OP_START: "ASYNC_OP_START",
  ASYNC_OP_SUCCESS: "ASYNC_OP_SUCCESS",
  ASYNC_OP_FAILURE: "ASYNC_OP_FAILURE",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",
  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO"
}
export const actionsCreators = {
  loadUsers: (users) => ({
    type: actionTypes.LOAD_USERS,
    value: users
  }),
  setAsyncOperationStart: () => ({
    type: actionTypes.ASYNC_OP_START
  }),
  setAsyncOperationSuccess: () => ({
    type: actionTypes.ASYNC_OP_SUCCESS
  }),
  setAsyncOperationFailure: () => ({
    type: actionTypes.ASYNC_OP_FAILURE
  }),
  addUser: (user) => ({
    type: actionTypes.ADD_USER,
    value: user
  }),
  updateUser: (user) => ({
    type: actionTypes.UPDATE_USER,
    value: user
  }),
  deleteUser: (id) => ({
    type: actionTypes.DELETE_USER,
    value: id
  }),
  setCurrentPhoto: (photo) => ({
    type: actionTypes.SET_CURRENT_PHOTO,
    value: photo
  }),
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return { ...state, user: { ...state.user, users: action.value } }
    case actionTypes.ASYNC_OP_START:
      return { ...state, loading: true }
    case actionTypes.ASYNC_OP_SUCCESS:
      return { ...state, loading: false, error: false }
    case actionTypes.ASYNC_OP_FAILURE:
      return { ...state, loading: false, error: true }
    case actionTypes.SET_CURRENT_PHOTO:
      return { ...state, currentPhoto: action.value }

    default:
      return state;
  }
}
export default createStore(reducers)
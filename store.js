import { createStore } from "redux"

const initialState = {
  user: {
    users: [],
    addMode: false,
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
  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO",
  SET_ADD_MODE:"SET_ADD_MODE"
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
  addUser: (name, email) => ({
    type: actionTypes.ADD_USER,
    name:name,
    email:email
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
  setAddMode: (addMode) => ({
    type: actionTypes.SET_ADD_MODE,
    value: addMode
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
    case actionTypes.ADD_USER:
      console.log(state);
      const id = state.user.users.length > 0 ? state.user.users[state.user.users.length - 1].id+1 : 1;
      return  { ...state, user: { ...state.user, users: [...state.user.users, { id: id, name:action.name, email:action.email}]} }
    case actionTypes.SET_ADD_MODE:
      return { ...state, addMode: action.value }

    default:
      return state;
  }
}
export default createStore(reducers)
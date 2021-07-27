import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";

const handlers = {
<<<<<<< HEAD
  [SHOW_LOADER]: state=>({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]:(state,{payload}) =>({...state, notes: payload}),
  [REMOVE_NOTE]: (state, {payload}) => ({
=======
  [SHOW_LOADER]:state => ({
    ...state,
    loading: true
  }),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes:[...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload
  }),
  [REMOVE_NOTE]: (state,{payload}) => ({
>>>>>>> e0de1b4c (firebaseLoading)
    ...state,
    notes: state.notes.filter(note=>note.id !== payload)
  }),
  DEFAULT: state => state
}

<<<<<<< HEAD
export const firebaseReducer = (state,action) => {
  const handle = handlers[action.type]||handlers.DEFAULT
  return handle(state, action)
=======
export const firebaseReducer = (state, action) => {
  const handle = handlers [action.type] || handlers.DEFAULT
  return handle(state,action)
>>>>>>> e0de1b4c (firebaseLoading)
}
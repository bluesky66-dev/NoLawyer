/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const registerUserSuccess = (state) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const showLoading = (state, { isShow }) => ({
  ...state,
  userIsLoading: isShow,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.REGISTER_USER_SUCCESS]: registerUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.SHOW_LOADING]: showLoading,
})

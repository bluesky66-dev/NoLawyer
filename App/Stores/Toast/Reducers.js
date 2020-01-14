/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ToastTypes } from './Actions'

export const hideToast = (state) => ({
  ...state,
  showToast: false,
  toastMessage: '',
})

export const showToast = (state, { toastMessage }) => ({
  ...state,
  showToast: true,
  toastMessage: toastMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ToastTypes.HIDE_TOAST]: hideToast,
  [ToastTypes.SHOW_TOAST]: showToast,
})

import { put } from 'redux-saga/effects'
import ToastActions from 'App/Stores/Toast/Actions'

export function* showToast({toastMessage}) {
  console.log('showToast saga == ', toastMessage)
  yield put(ToastActions.showToast(toastMessage))
  // yield put(ToastActions.hideToast())
  // setTimeout(function* () {
  //   yield put(ToastActions.hideToast())
  // }, 1500)
}

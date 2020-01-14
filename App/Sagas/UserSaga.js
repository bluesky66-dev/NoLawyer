import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import ToastActions from 'App/Stores/Toast/Actions'
import { userService } from 'App/Services/UserService'
import auth from '@react-native-firebase/auth'
import NavigationService from '../Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}

export function* registerUser({email, password}) {
  yield put(UserActions.fetchUserLoading())

  try {
    const userCredential = yield call(auth().createUserWithEmailAndPassword, email, password);
    if (userCredential) {
      yield put(UserActions.registerUserSuccess())
      NavigationService.navigateAndReset('MainScreen')
    }
  } catch (e) {
    yield put(
      ToastActions.showToast(e.message)
    )
  }

}


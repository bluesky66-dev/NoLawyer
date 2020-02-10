import { call, put } from 'redux-saga/effects'
import { Alert } from 'react-native'
import UserActions from 'App/Stores/User/Actions'
import ToastActions from 'App/Stores/Toast/Actions'
import { userService } from 'App/Services/UserService'

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
    const userCredential = yield call(userService.registerUser, email, password);
    if (userCredential) {
      ToastActions.showToast('You have registered successfully!')
      Alert.alert(
        'Verify Email',
        'The verification email has been sent. Please verify your email.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      yield put(UserActions.registerUserSuccess())
      // NavigationService.navigateAndReset('LoginScreen')
    }
  } catch (e) {
    let errorMessage = e.message.replace(e.code, '').replace('[]', '');
    console.log('register error ==', errorMessage);
    yield put(UserActions.fetchUserFailure(errorMessage));
    yield put(
      ToastActions.showToast(errorMessage)
    )
  }
}

export function* loginWithEmail({email, password}) {
  yield put(UserActions.fetchUserLoading())

  try {
    const userCredential = yield call(userService.loginWithEmailAndPassword, email, password);
    if (userCredential) {
      ToastActions.showToast('You have logged in successfully!')
      yield put(UserActions.fetchUserSuccess(userCredential))
    }
  } catch (e) {
    let errorMessage = e.message.replace(e.code, '').replace('[]', '');
    // console.log('login error ==', errorMessage);
    yield put(UserActions.fetchUserFailure(errorMessage));
    yield put(ToastActions.showToast(errorMessage))
  }
}


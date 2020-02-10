import axios from 'axios'
import { Config } from 'App/Config'
import { curryN, gte, is } from 'ramda'
import auth from '@react-native-firebase/auth'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }

  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

function registerUser(email, password) {
  return auth().createUserWithEmailAndPassword(email, password).then(async (userCredential) => {
    if (!userCredential.user.emailVerified) {
      await userCredential.user.sendEmailVerification({
        handleCodeInApp: true,
        dynamicLinkDomain: 'nolawyer.page.link',
        url: 'https://nolawyer.page.link/app/email-verification',
        android: {
          installApp: true,
          packageName: 'com.app.nolawyer',
        },
      });
      await auth().currentUser.signOut();
    }
    return userCredential;
  });
}

function loginWithEmailAndPassword(email, password) {
  console.log('email, password', email, password);
  return auth().signInWithEmailAndPassword(email, password);
}

export const userService = {
  fetchUser,
  registerUser,
  loginWithEmailAndPassword,
}

import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  NavigationService.navigateAndReset('WelcomeScreen')
}

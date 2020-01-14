import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  showToast: ['toastMessage'],
  hideToast: null,
})

export const ToastTypes = Types
export default Creators

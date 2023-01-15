import type { ExtractPropTypes } from 'vue'
import { useCustomClassProp, useCustomStyleProp } from '../composables'
import { CANCEL_EVENT, CONFIRM_EVENT } from '../constants'

export const dialogProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
  show: Boolean,
  title: String,
  message: String,
  showConfirmButton: Boolean,
  showCancelButton: Boolean,
  confirmButtonText: String,
  cancelButtonText: String,
}

export const dialogEmits = {
  [CONFIRM_EVENT]: () => true,
  [CANCEL_EVENT]: () => true,
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = typeof dialogEmits

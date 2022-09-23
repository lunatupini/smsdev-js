import { getCancel } from './cancel'
import { getSend } from './sendSms'

export interface Options {
  /** Api Key */
  key: string
}

export const smsDev = ({ key }: Options) => {
  /** Send one or more SMS */
  const cancel = getCancel(key)
  const send = getSend(key)

  return { cancel, send }
}

export * from './types'
export default smsDev

import { getSend } from './sendSms'

export interface Options {
  /** Api Key */
  key: string
}

export const smsDev = ({ key }: Options) => {
  /** Send one or more SMS */
  const send = getSend(key)

  return { send }
}

export * from './types'

export default smsDev

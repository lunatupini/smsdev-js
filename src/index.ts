import { cancel } from './cancel'
import { inbox } from './inbox'
import { send } from './send'

export interface Options {
  /** Api Key */
  key: string
}

export const smsDev = ({ key }: Options) => ({ cancel: cancel(key), send: send(key), inbox: inbox(key) })

export * from './types'
export default smsDev

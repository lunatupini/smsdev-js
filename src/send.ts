import dayjs from 'dayjs'

import { api } from './common'
import { ApiMessageParams, MessageParams, Send, SendResponse } from './types'

const getPhone = (phone: string | number) => (typeof phone === 'string' ? phone : phone.toString())
const parseMessage = (message: MessageParams, key: string): ApiMessageParams => {
  const { options } = message
  return {
    key,
    msg: message.msg,
    number: getPhone(message.phone),
    type: options?.type || 9,
    flash: options?.flash,
    refer: options?.reference,
    jobdate: options?.schedule && dayjs(options.schedule).format('DD/MM/YY'),
    jobtime: options?.schedule && dayjs(options.schedule).format('HH:mm'),
  }
}

type SendWithKey = (key: string) => Send
export const send: SendWithKey = (key) => async (messages) => {
  const request = Array.isArray(messages) ? messages.map((msg) => parseMessage(msg, key)) : parseMessage(messages, key)

  const { data } = await api.post<SendResponse>('/send', request)

  return data
}

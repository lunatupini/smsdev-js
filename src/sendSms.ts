import axios from 'axios'
import dayjs from 'dayjs'

import { apiUrl } from './common'
import { ApiMessageParams, MessageParams, Send, SendResponse } from './types'

const getPhone = (phone: string | number) => (typeof phone === 'string' ? phone : phone.toString())
const parseMessage = (message: MessageParams, key: string): ApiMessageParams => ({
  key,
  msg: message.msg,
  number: getPhone(message.phone),
  type: message.options.type || 9,
  flash: message.flash,
  refer: message.reference,
  jobdate: message.schedule && dayjs(message.schedule).format('DD/MM/YY'),
  jobtime: message.schedule && dayjs(message.schedule).format('HH:mm'),
})

type GetSend = (key: string) => Send
export const getSend: GetSend = (key) => async (messages) => {
  const request = Array.isArray(messages) ? messages.map((msg) => parseMessage(msg, key)) : parseMessage(messages, key)

  const { data } = await axios.post<SendResponse>(apiUrl + '/send', request)

  return data
}

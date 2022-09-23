import axios from 'axios'

import { apiUrl } from './common'
import { GetSend, SendResponse } from './types'

const getPhone = (phone: string | number) => (typeof phone === 'string' ? phone : phone.toString())

export const getSend: GetSend = (key) => async (messages) => {
  const request = Array.isArray(messages)
    ? messages.map((msg) => ({ ...msg, phone: getPhone(msg.phone), key }))
    : messages

  const { data } = await axios.post<SendResponse>(apiUrl + '/send', request)

  return data
}

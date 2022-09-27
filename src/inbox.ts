import dayjs from 'dayjs'

import { api } from './common'
import { Inbox, InboxApiParams, InboxApiReponse, InboxParams } from './types'

const statusToCode: Record<string, 0 | 1> = {
  new: 0,
  all: 1,
}

const parseInboxSettings = (settings: InboxParams, key: string): InboxApiParams => {
  const { status, dateFrom, dateTo, ...rest } = settings

  return {
    key,
    ...rest,
    status: status && statusToCode[status],
    date_from: dateFrom && dayjs(dateFrom).format('DD/MM/YY'),
    date_to: dateTo && dayjs(dateTo).format('DD/MM/YY'),
  }
}

type InboxWithKey = (key: string) => Inbox
export const inbox: InboxWithKey = (key) => async (inboxSettings) => {
  const settings = parseInboxSettings(inboxSettings, key)
  const { data } = await api.post<InboxApiReponse>('/inbox', settings)

  return data
}

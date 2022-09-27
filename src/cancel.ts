import { api } from './common'
import { Cancel, CancelResponse } from './types'

type GetCancel = (key: string) => Cancel
export const cancel: GetCancel =
  (key) =>
  async (id): Promise<CancelResponse> => {
    const { data } = await api.post<CancelResponse>('/cancel', { key, id })

    return data
  }

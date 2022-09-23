import axios from 'axios'

import { apiUrl } from './common'
import { Cancel, CancelResponse } from './types'

type GetCancel = (key: string) => Cancel
export const getCancel: GetCancel =
  (key) =>
  async (id): Promise<CancelResponse> => {
    const { data } = await axios.post<CancelResponse>(apiUrl + '/cancel', { key, id })

    return data
  }

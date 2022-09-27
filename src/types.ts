type Situacao = 'OK' | 'ERRO'

export type SmsTypes = 9
export type SendOptions = {
  type?: SmsTypes
  /** Private reference to identify the message */
  reference?: string
  flash?: number
  schedule?: Date
}

export type SendResponse = ReadonlyArray<{
  /** Request status */
  situacao: Situacao

  codigo: string

  /** Delivery Id */
  id: string

  /** Status description */
  descricao: string
}>

export type MessageParams = {
  /** Valid phone number */
  phone: string | number

  /** Sms message content */
  msg: string
  options?: SendOptions
}

export type ApiMessageParams = {
  key: string
  type: number
  number: string
  msg: string
  refer?: string
  flash?: number
  jobdate?: string
  jobtime?: string
}

export interface Send {
  (params: MessageParams): Promise<SendResponse>
  (params: MessageParams[]): Promise<SendResponse>
}

export type CancelResponse = ReadonlyArray<{
  /** Request status */
  situacao: 'OK' | 'ERRO'

  codigo: string

  /** Delivery Id */
  id: string

  /** Status description */
  descricao: string
}>
export interface Cancel {
  (id: number[]): Promise<CancelResponse>
}

export type InboxApiParams = {
  key: string
  status?: 0 | 1
  id?: number[]
  date_from?: string
  date_to?: string
}

export type InboxParams = {
  status?: 'new' | 'all'
  id?: number[]
  dateFrom?: Date
  dateTo?: Date
}

export type InboxApiReponse = ReadonlyArray<{
  /** Request status */
  situacao: Situacao

  /** Receive date in format dd/mm/yyyy hh24:mi:ss  */
  data_read: string

  /** Sender phone with country code e.g: +5521999000123 */
  telefone: string

  /** Unique message ID */
  id: string

  /** Identifier provided in the previous sent message */
  refer: string

  /** Previous sent message text */
  msg_sent: string

  /** Unique ID from the received message */
  id_sms_read: string

  /** Received message text */
  descricao: string
}>
export interface Inbox {
  (params: InboxParams): Promise<InboxApiReponse>
}

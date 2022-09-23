export type SmsTypes = 9
export type SendOptions = {
  type: SmsTypes
  /** Private reference to identify the message */
  reference?: string
  flash?: number
  schedule?: Date
}

export type SendResponse = ReadonlyArray<{
  /** Request status */
  situacao: 'OK' | 'ERRO'

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
  options: SendOptions
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

export type SmsTypes = 9
export type SendOptions = {
  type: SmsTypes
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

export interface Send {
  (params: MessageParams): Promise<SendResponse>
  (params: ReadonlyArray<MessageParams>): Promise<SendResponse>
}
export type GetSend = (apiKey: string) => Send

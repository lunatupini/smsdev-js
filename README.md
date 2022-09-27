# SmsDev-js

> Typed promise based adapter for SMS Dev service. Wraps [SMS Dev API](https://www.smsdev.com.br/) in a lightweight easy to use lib.

```typescript
import smsDev from 'smsdev-js'

const sms = sms({ key: XXXXXXXX })
```

# Motivation

SMS Dev doesn't provide an official API and can be it's usage can be very primitive. The main goal here is to abstract the api to a more reasonable usage. You'll notice that some properties has been altered to be easier to use and understand.

Any updated property is mapped back to what the official API requires.

# Getting Started

## Official Api Doc

This lib uses official SMS Dev api. You can find the docs on [smsdev.com.br](https://www.smsdev.com.br).

## Installation

**npm**

```console
npm i smsdev-js
```

**yarn**

```console
yarn add smsdev-js
```

**pnpm**

```console
pnpm i smsdev-js
```

## Usage

Methods usually reflects the names of the official api.

### Create instance

You need an API key generated in the smsdev dashboard to create an instance.

```typescript
import smsdev from 'smsdev-js'

const sms = smsdev({ key: XXXXXXX })
```

### Send SMS
You need the full phone number with country code to send successfully.
```typescript
const messageConfig = { msg: 'Short text message', phone: '+5521999000123' }
const response = await sms.send(messageConfig)
```
### Send Multiple SMS
```typescript
const messagesConfig = [
  { 
    msg: 'Short text message',
    phone: '+5521999000123' 
  },
  { 
    msg: 'Short text message 2',
    phone: '+5521999000321' 
  },
]
const response = await sms.send(messagesConfig)
```
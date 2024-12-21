
Api that allows to create crypto payments.
Api client for [crypto-keeper](https://crypto-keeper.com). 

[![npm](https://img.shields.io/npm/v/@crypto-keeper/api)](https://www.npmjs.com/package/@crypto-keeper/api)

## Install

``yarn add @crypto-keeper/api``

## Usage

```tsx
import api from '@crypto-keeper/api'

const payment = await api.payment.create({ amount: 100  })
```


## Supported env

- `CRYPTO_KEEPER_CLIENT_ID`
- `CRYPTO_KEEPER_CLIENT_SECRET`


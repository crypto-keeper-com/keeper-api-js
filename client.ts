import axios from 'axios'

const {
  CRYPTO_KEEPER_CLIENT_ID, CRYPTO_KEEPER_CLIENT_SECRET,
} = process.env

const api_url = 'https://api.crypto-keeper.com'

const headers: Record<string, string> = {}

if (CRYPTO_KEEPER_CLIENT_ID && CRYPTO_KEEPER_CLIENT_SECRET) {
  let authBuffer = Buffer.from(`${CRYPTO_KEEPER_CLIENT_ID}:${CRYPTO_KEEPER_CLIENT_SECRET}`)
  // If we don't use toString(), JavaScript assumes we want to convert the object to utf8.
  // We can make it convert to other formats by passing the encoding type to toString().
  headers.authorization = authBuffer.toString('base64')
}

const client = axios.create({
  baseURL: api_url,
  headers,
})

export function setApiUrl(url: string) {
  client.defaults.baseURL = url
}
export default client

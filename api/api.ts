import client from '../client'
import paymentApi from './paymentApi'

export { paymentApi }
export default {
  payment: paymentApi,

  async health() {
    const { data } = await client.get('/health')
    return data
  },
  // verify  is similar to health, but checks app auth
  async verify() {
    const { data } = await client.get('/verify')
    return data
  },
}

import client from '../client'

export default {
  async get(id: string) {
    const { data } = await client.get(`/payment/${id}`)
    return data
  },
  async getList(params?: { offset?: number }) {
    const { data } = await client.get('/payment/list', { params })
    return data
  },
  async create(payload: {
    amount: string | number
    payment_id?: string // own id for example
    data?: Record<string, any> // own params if needed
  }) {
    const { data } = await client.post('/payment/create', payload)
    return data
  },
}

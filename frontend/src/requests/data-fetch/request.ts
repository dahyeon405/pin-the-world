import { request } from 'graphql-request'

const endpoint = import.meta.env.VITE_SERVER_URL

export const pRequest = async (query: string) => {
  return await request(endpoint, query)
}

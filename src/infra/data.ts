import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const token: string = process.env.API_TOKEN || ''

export const getQueryNews = async (query: any, searchIn: any, language: any) => {

  const { data } = await axios.get(`https://gnews.io/api/v4/search`, {params: {token, q: query, in: searchIn, lang: language}})

  return data
}
import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: API_URL,
})
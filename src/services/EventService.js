import axios from 'axios'
 
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/vglowczewski/ICS4U-2023-2024',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
 
export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
import axios from 'axios'
import UnselectedItemsDto from '../models/unselectedItems.dto'

export default class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://localhost:44346/api'
  }

  async getUnselectedItems(): Promise<UnselectedItemsDto[]> {
    console.log('CHEGOU AQUI')
    const url = `${this.baseUrl}/gift/unselectedItems`

    const response = await axios.get<UnselectedItemsDto[]>(url)
    return response.data
  }
}

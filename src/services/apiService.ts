import axios from 'axios'
import UnselectedItemsDto from '../models/unselectedItems.dto'

export default class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl =
      'https://brspontesgiftlistapi20231226100022.azurewebsites.net/api'
  }

  async getUnselectedItems(): Promise<UnselectedItemsDto[]> {
    console.log('CHEGOU AQUI')
    const url = `${this.baseUrl}/gift/unselectedItems`

    const response = await axios.get<UnselectedItemsDto[]>(url)
    return response.data
  }
}

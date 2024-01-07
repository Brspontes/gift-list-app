import axios from 'axios'
import UnselectedItemsDto from '../models/unselectedItems.dto'
import SelectItemDto from '../models/selectItem.dto'

export default class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl =
      'https://brspontesgiftlistapi20231226100022.azurewebsites.net/api'

    //this.baseUrl = 'https://localhost:44346/api'
  }

  async getUnselectedItems(): Promise<UnselectedItemsDto[]> {
    const url = `${this.baseUrl}/gift/unselectedItems`

    const response = await axios.get<UnselectedItemsDto[]>(url)
    return response.data ?? []
  }

  async selecTItem(selectItemDto: SelectItemDto): Promise<boolean> {
    const url = `${this.baseUrl}/gift/selectItem`

    const response = await axios.post(url, { ...selectItemDto })
    return response.status === 200 ? true : false
  }
}

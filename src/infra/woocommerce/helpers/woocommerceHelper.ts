import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import config from 'config'
import { OrderModel } from 'domain/models'
import { WooCommerceResponse } from './types'

export const WoocommerceHelper = {
  async authenticate(): Promise<WooCommerceRestApi> {
    const woocommerce = new WooCommerceRestApi({
      url: config.WOO_URL as string,
      consumerKey: config.WOO_CONSUMER_KEY as string,
      consumerSecret: config.WOO_CONSUMER_SECRET_KEY as string,
      version: config.WOO_VERSION,
      queryStringAuth: true,
      timeout: 50000000
    })
    return woocommerce
  },
  async getAllCategories(): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.get('products/categories')

    return response
  },
  async getAllAttributes(): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.get('products/attributes')

    return response
  },
  async getAttributeTerms(attributeId: string): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.get(`products/attributes/${attributeId}/terms`)

    return response
  },
  async getAllProducts(): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.get('products')

    return response
  },
  async getProductById(id: string): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.get(`products/${id}`)

    return response
  },
  async postOrders(order: OrderModel): Promise<WooCommerceResponse> {
    const api = await this.authenticate()
    const response = await api.post('orders', order)

    return response
  }
}

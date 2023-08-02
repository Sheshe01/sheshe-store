import { WooCommerceRestApiVersion } from '@woocommerce/woocommerce-rest-api'
import { Environment } from './types'

const config: Environment = {
  SWELL_APP: process.env.SWELL_APP,
  SWELL_SECRET_KEY: process.env.SWELL_SECRET_KEY,
  WOO_URL: process.env.WOO_URL,
  WOO_CONSUMER_KEY: process.env.WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET_KEY: process.env.WOO_CONSUMER_SECRET_KEY,
  WOO_VERSION: process.env.WOO_VERSION as WooCommerceRestApiVersion
}

export default config

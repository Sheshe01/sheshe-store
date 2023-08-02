import { WooCommerceRestApiVersion } from '@woocommerce/woocommerce-rest-api'

export type Environment = {
  SWELL_APP: string | undefined
  SWELL_SECRET_KEY: string | undefined
  WOO_URL: string | undefined
  WOO_CONSUMER_KEY: string | undefined
  WOO_CONSUMER_SECRET_KEY: string | undefined
  WOO_VERSION: WooCommerceRestApiVersion | undefined
}

export type Environments = {
  [key: string]: Environment
}

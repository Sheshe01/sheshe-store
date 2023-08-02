import { ProductModel } from 'domain/models/ProductModel'

export type RenderSlidesProps = {
  product: ProductModel
  type: 'thumbSlide' | 'mainSlide' | 'mainSlideMobile'
}

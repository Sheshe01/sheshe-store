/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { Splide } from '@splidejs/react-splide'
import useWindowSize from 'hooks/useWindowSize'
import { OptionsVariation } from 'domain/models'
import { Container } from 'components/structure/Container'
import Text from 'components/common/Text'
import ButtonElement from 'components/common/ButtonElement'
import ListOptions from './ListOptions'
import RenderSlides from './RenderSlides'
import ProductTabs from './ProductTabs'
import RelatedProducts from './RelatedProducts'
import { mainOptions, thumbsOptions } from './helpers'
import { useCartContext } from 'context/CartContext'
import { formatPrice } from 'utils/helpers'
import { ProductPagesProps } from './types'

import { Columns, ColumnLeft, ColumnRight, AttributeContainer } from './styles'

const ProductPage: React.FC<ProductPagesProps> = ({ data }) => {
  const { AddItemsInCart } = useCartContext()
  const { productFound, productTabs, relatedProducts, attributes } = data
  const {
    name,
    price,
    attributes: productAttributs,
    stock_status
  } = productFound

  const mainRef = React.createRef<Splide>()
  const thumbsRef = React.createRef<Splide>()
  const { isMobileDevice } = useWindowSize()
  const numberAttributes = productAttributs.length
  const [numberSelectedAttributes, setNumberSelectedAttributes] =
    useState<number>(0)

  const [selectedOptions, setSelectedOptions] = useState<OptionsVariation[]>([])

  const handleOptionsUpdate = (value: string, valueType: string) => {
    const productAttributClicked = productAttributs.find(
      pAttribute => pAttribute.id === valueType
    )
    if (
      productAttributClicked?.options.includes(value) &&
      numberSelectedAttributes < numberAttributes &&
      !selectedOptions.some(item => item.id === valueType) &&
      value !== ''
    ) {
      const attributesData = attributes.find(item => item.id === valueType)
      const optionsObject: OptionsVariation = {
        id: attributesData?.id as string,
        name: attributesData?.name as string,
        value: value,
        variant: true
      }
      setSelectedOptions([...selectedOptions, optionsObject])
      setNumberSelectedAttributes(numberSelectedAttributes + 1)
    } else if (value === '') {
      const oldSelectedOptions = selectedOptions.filter(
        item => item.id !== valueType
      )

      setSelectedOptions(oldSelectedOptions)
      setNumberSelectedAttributes(numberSelectedAttributes - 1)
    } else {
      const newSelectedOptions = selectedOptions.map(item => {
        if (item.id === valueType) {
          const newItem = item
          newItem.value = value
          return newItem
        } else return item
      })
      setSelectedOptions(newSelectedOptions)
    }
  }
  const handleButtonClick = () => {
    AddItemsInCart(productFound /*, selectedOptions */)
  }

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide)
    }
  }, [])

  return (
    <React.Fragment>
      <Container>
        <Columns>
          <ColumnLeft>
            <Splide
              options={thumbsOptions}
              ref={thumbsRef}
              id="thumbnail-slider"
            >
              <RenderSlides product={productFound} type="thumbSlide" />
            </Splide>
            <Splide options={mainOptions} ref={mainRef} id="main-slider">
              {isMobileDevice ? (
                <RenderSlides product={productFound} type="mainSlideMobile" />
              ) : (
                <RenderSlides product={productFound} type="mainSlide" />
              )}
            </Splide>
          </ColumnLeft>
          <ColumnRight>
            <Text weight="bold" heading={200}>
              {name}
            </Text>
            <Text weight="bold" heading={200}>
              {formatPrice(parseInt(price))}
            </Text>
            {productAttributs.map(pAttribute => (
              <AttributeContainer key={pAttribute.id}>
                <Text heading={100}>{pAttribute.name}</Text>
                <ListOptions
                  data={pAttribute.options}
                  checkBoxType={pAttribute.id}
                  handleOptionClick={handleOptionsUpdate}
                />
              </AttributeContainer>
            ))}
            {stock_status === 'instock' ? (
              <React.Fragment>
                <Text body>Em estoque</Text>
                <ButtonElement
                  disabled={numberSelectedAttributes !== numberAttributes}
                  handleClick={handleButtonClick}
                >
                  Adicionar ao carrinho
                </ButtonElement>
              </React.Fragment>
            ) : (
              <Text body>Produto indisponível</Text>
            )}
          </ColumnRight>
        </Columns>
        {productTabs ? <ProductTabs data={productTabs} /> : null}
        {relatedProducts.length > 0 ? (
          <RelatedProducts data={relatedProducts} />
        ) : null}
      </Container>
    </React.Fragment>
  )
}

export default ProductPage

import React, { useState, useCallback, useEffect } from 'react'
import { Container } from 'components/structure/Container'
import ButtonElement from 'components/common/ButtonElement'
import { ProductModel } from 'domain/models/ProductModel'
import { AttributesModel } from 'domain/models/AttributesModel'
import ProductContainer from 'components/common/ProductContainer'
import FiltersContainer from './FiltersContainer'
import {
  CategoryPageContainer,
  ButtonContainer,
  ContainerNotFound
} from './styles'
import Text from 'components/common/Text'

type CategoryPageProps = {
  products: ProductModel[]
  attributes: AttributesModel[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  products,
  attributes
}) => {
  const [maxProductsToBeSHow, setMaxProductsToBeSHow] = useState(12)
  const handleButtonClick = () => {
    setMaxProductsToBeSHow(maxProductsToBeSHow + maxProductsToBeSHow)
  }

  const [productsList, setProductsList] = useState<ProductModel[]>([])

  const handleFiltersClick = useCallback(
    (value: string[]) => {
      let newProductsList: ProductModel[] = []
      value.forEach(item => {
        const productsThatContainAttributes = products.filter(product =>
          product.attributes.find(pAttribute =>
            pAttribute.options.includes(item)
          )
        )
        newProductsList = [...newProductsList, ...productsThatContainAttributes]
      })
      setProductsList(value.length > 0 ? newProductsList : products)
    },
    [productsList, setProductsList]
  )
  useEffect(() => {
    setProductsList(products)
  }, [products])
  return (
    <Container>
      <FiltersContainer
        attributes={attributes}
        handleFiltersClick={handleFiltersClick}
      />
      {productsList.length > 0 ? (
        <CategoryPageContainer>
          {productsList.slice(0, maxProductsToBeSHow).map(product => (
            <ProductContainer key={product.id} data={product} />
          ))}
        </CategoryPageContainer>
      ) : (
        <ContainerNotFound>
          <Text heading={300}>Nenhum Produto encontrado</Text>
        </ContainerNotFound>
      )}
      {maxProductsToBeSHow > products.length ||
      productsList.length === 0 ? null : (
        <ButtonContainer>
          <ButtonElement handleClick={handleButtonClick}>
            Mostrar mais
          </ButtonElement>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default CategoryPage

import React from 'react'
import { Container } from 'components/structure/Container'
import CheckoutProgressBar from 'components/common/CheckoutProgressBar'
import * as Styled from './styles'
import ButtonElement from 'components/common/ButtonElement'
import { getStepsData } from './helpers'
import { useCheckoutContext } from 'context/CheckoutContext'
import { ProductModel } from 'domain/models'

const CheckoutPageComponent: React.FC<{ products: ProductModel[] }> = ({
  products
}) => {
  const stepsData = getStepsData(products)

  const {
    checkoutStep,
    inputNameError,
    inputLastNameError,
    inputEmailError,
    inputZipCodeError,
    inputAddressError,
    inputAddressNumberError,
    inputCityError,
    inputCellphoneError,
    handleNextClick,
    handlePreviousClick
  } = useCheckoutContext()

  const isErrorInForm = () => {
    if (
      inputNameError.length === 0 &&
      inputLastNameError.length === 0 &&
      inputEmailError.length === 0 &&
      inputZipCodeError.length === 0 &&
      inputAddressError.length === 0 &&
      inputAddressNumberError.length === 0 &&
      inputCityError.length === 0 &&
      inputCellphoneError.length === 0
    ) {
      return false
    }
    return true
  }

  return (
    <Container>
      <CheckoutProgressBar
        label={stepsData[checkoutStep].title}
        step={checkoutStep + 1}
      />
      <Styled.Form>
        {stepsData[checkoutStep].component}
        {checkoutStep >= 1 ? null : (
          <Styled.ButtonsContainer>
            <ButtonElement
              disabled={checkoutStep === 0}
              handleClick={() => handlePreviousClick()}
            >
              Anterior
            </ButtonElement>
            <ButtonElement
              disabled={isErrorInForm()}
              handleClick={() => handleNextClick()}
            >
              Próxima
            </ButtonElement>
          </Styled.ButtonsContainer>
        )}
      </Styled.Form>
    </Container>
  )
}

export default CheckoutPageComponent

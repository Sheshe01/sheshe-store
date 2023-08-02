import React, { useState } from 'react'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent
} from '@stripe/stripe-js'
import ButtonElement from 'components/common/ButtonElement'
import { useCartContext } from 'context/CartContext'
import LoadingSpinner from 'components/common/LoadingSpinner'
import { CARD_ELEMENT_OPTIONS, checkStripeElementsValid } from './helpers'
import { createPaymentIntentApi, ConfirmCardPayment } from 'lib/stripe'
import { PostOrder } from 'lib/order'
import * as Styles from './styles'
import SecurityIcon from '../OrderDetails/SecurityIcon'
import { useCheckoutContext } from 'context/CheckoutContext'
import { OrderBilling, OrderShipping } from 'domain/models'
import { setCartInLocalStorage } from 'utils/helpers'

const Payment: React.FC = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { shoppingCart, setShoppingCart, freightPrice, selectedCity } =
    useCartContext()
  const {
    createOrderShipping,
    createOrderBilling,
    handleNextClick,
    setOrderId,
    createShippingLines
  } = useCheckoutContext()

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!shoppingCart) return

    if (!stripe || !elements) return

    setIsLoading(true)

    if (!checkStripeElementsValid()) {
      setError('Por favor, verifique os dados do seu cartão')
      setIsLoading(false)
      return
    }

    try {
      const paymentIntent = await createPaymentIntentApi(
        shoppingCart,
        freightPrice
      )
      console.log('--CREATED STRIPE PAYMENT INTENT: ', paymentIntent)

      const shippingData = createOrderShipping()
      const billingData = createOrderBilling() as OrderBilling
      const shippingLines = createShippingLines(freightPrice)
      const wooCommerceOrder = await PostOrder(
        shoppingCart,
        shippingData as OrderShipping,
        billingData as OrderBilling,
        paymentIntent?.paymentIntentId,
        shippingLines
      )
      console.log('--CREATED WOOCOMMERCE ORDER: ', wooCommerceOrder)
      setOrderId((wooCommerceOrder.id as unknown as number) || 0)
      billingData.country = selectedCity?.acronym as string
      const stripeResult = await ConfirmCardPayment(
        elements,
        stripe,
        paymentIntent?.clientSecret,
        shippingData as OrderShipping,
        billingData as OrderBilling
      )
      console.log('--STRIPE CONFIRM CARD: ', stripeResult)
      setIsLoading(false)
      setShoppingCart([])
      setCartInLocalStorage([])
      handleNextClick()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setError(
        'Algo deu errado com o seu pagamento, tente novamente mais tarde'
      )
    }
  }
  const handleValidation = (
    e:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardCvcElementChangeEvent
  ) => {
    if (e.error) {
      setError(e.error.message)
    } else {
      setError('')
    }
  }

  return (
    <Styles.Payment>
      <Styles.PaymentForm
        id="card-payment-form"
        onClick={() => console.log('clicou nbo form')}
      >
        <Styles.CardInputWrapper>
          <CardNumberElement
            id="card-number-element"
            className="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
        </Styles.CardInputWrapper>
        <Styles.CardInputWrapper>
          <CardExpiryElement
            id="card-expiry-element"
            className="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
        </Styles.CardInputWrapper>
        <Styles.CardInputWrapper>
          <CardCvcElement
            id="card-cvc-element"
            className="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
        </Styles.CardInputWrapper>
        <Styles.ErrorMessage isDisplayNone={error.length === 0}>
          {error}
        </Styles.ErrorMessage>
      </Styles.PaymentForm>
      <Styles.Buttons>
        <ButtonElement
          // disabled={isErrorInForm}
          handleClick={e => handleFormSubmit(e)}
        >
          Pagar
        </ButtonElement>
        <SecurityIcon />
      </Styles.Buttons>
      {isLoading ? <LoadingSpinner /> : null}
    </Styles.Payment>
  )
}

export default Payment

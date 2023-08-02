export const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: 'black',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883'
      },
      '::placeholder': {
        color: '#87BBFD'
      }
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE'
    }
  }
}

export const checkStripeElementsValid = () => {
  const cardNumber = document.getElementById('card-number-element')!
  const cardExpiry = document.getElementById('card-expiry-element')!
  const cardCVC = document.getElementById('card-cvc-element')!

  if (
    cardNumber.classList.contains('StripeElement--complete') &&
    cardExpiry.classList.contains('StripeElement--complete') &&
    cardCVC.classList.contains('StripeElement--complete')
  ) {
    return true
  }
  return false
}

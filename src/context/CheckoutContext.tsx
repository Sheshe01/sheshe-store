import React, { createContext, useContext, useState } from 'react'
import { OrderBilling, OrderShipping, ShippingLines } from 'domain/models'
import isEmail from 'validator/lib/isEmail'

type CheckoutContextProps = {
  checkoutStep: number
  setCheckoutStep: React.Dispatch<React.SetStateAction<number>>
  isErrorInForm: boolean
  setIsErrorInForm: React.Dispatch<React.SetStateAction<boolean>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  lastName: string
  setLastName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  country: string
  setCountry: React.Dispatch<React.SetStateAction<string>>
  zipCode: string
  setZipCode: React.Dispatch<React.SetStateAction<string>>
  address: string
  setAddress: React.Dispatch<React.SetStateAction<string>>
  addressNumber: string
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  stateCountry: string
  setStateCountry: React.Dispatch<React.SetStateAction<string>>
  cellphone: string
  setCellphone: React.Dispatch<React.SetStateAction<string>>
  card: string
  setCard: React.Dispatch<React.SetStateAction<string>>
  isValidName: (value: string) => boolean
  isValidLastName: (value: string) => boolean
  isValidEmail: (value: string) => boolean
  isValidZipCode: (value: string) => boolean
  isValidAddress: (value: string) => boolean
  isValidAddressNumber: (value: string) => boolean
  isValidCity: (value: string) => boolean
  isValidCellphone: (value: string) => boolean
  isValidCountry: (value: string) => boolean
  ValidateForm: () => void
  inputNameError: string
  setInputNameError: React.Dispatch<React.SetStateAction<string>>
  inputLastNameError: string
  setInputLastNameError: React.Dispatch<React.SetStateAction<string>>
  inputEmailError: string
  setInputEmailError: React.Dispatch<React.SetStateAction<string>>
  inputZipCodeError: string
  setInputZipCodeError: React.Dispatch<React.SetStateAction<string>>
  inputAddressError: string
  setInputAddressError: React.Dispatch<React.SetStateAction<string>>
  inputAddressNumberError: string
  setInputAddressNumberError: React.Dispatch<React.SetStateAction<string>>
  inputCityError: string
  setInputCityError: React.Dispatch<React.SetStateAction<string>>
  inputCountryError: string
  setInputCountryError: React.Dispatch<React.SetStateAction<string>>
  inputCellphoneError: string
  setInputCellphoneError: React.Dispatch<React.SetStateAction<string>>
  createOrderShipping: () => OrderShipping | void
  createOrderBilling: () => OrderBilling | void
  handleNextClick: () => void
  handlePreviousClick: () => void
  orderId: number
  setOrderId: React.Dispatch<React.SetStateAction<number>>
  createShippingLines: (freightTotal: number) => ShippingLines[]
}

const defaultValue = {
  checkoutStep: 0,
  setCheckoutStep: () => {},
  isErrorInForm: false,
  setIsErrorInForm: () => {},
  name: '',
  setName: () => {},
  lastName: '',
  setLastName: () => {},
  email: '',
  setEmail: () => {},
  country: '',
  setCountry: () => {},
  zipCode: '',
  setZipCode: () => {},
  address: '',
  setAddress: () => {},
  addressNumber: '',
  setAddressNumber: () => {},
  city: '',
  setCity: () => {},
  stateCountry: '',
  setStateCountry: () => {},
  cellphone: '',
  setCellphone: () => {},
  card: '',
  setCard: () => {},
  isValidName: () => false,
  isValidLastName: () => false,
  isValidEmail: () => false,
  isValidZipCode: () => false,
  isValidAddress: () => false,
  isValidAddressNumber: () => false,
  isValidCity: () => false,
  isValidCellphone: () => false,
  isValidCountry: () => false,
  ValidateForm: () => {},
  inputNameError: '',
  setInputNameError: () => {},
  inputLastNameError: '',
  setInputLastNameError: () => {},
  inputEmailError: '',
  setInputEmailError: () => {},
  inputZipCodeError: '',
  setInputZipCodeError: () => {},
  inputAddressError: '',
  setInputAddressError: () => {},
  inputAddressNumberError: '',
  setInputAddressNumberError: () => {},
  inputCityError: '',
  setInputCityError: () => {},
  inputCountryError: '',
  setInputCountryError: () => {},
  inputCellphoneError: '',
  setInputCellphoneError: () => {},
  createOrderShipping: () => {},
  createOrderBilling: () => {},
  handleNextClick: () => {},
  handlePreviousClick: () => {},
  orderId: 0,
  setOrderId: () => {},
  createShippingLines: (freightTotal: number) => []
}

const CheckoutContext = createContext<CheckoutContextProps>(defaultValue)

const CheckoutContextProvider: React.FC = ({ children }) => {
  const [checkoutStep, setCheckoutStep] = useState(0)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [address, setAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [city, setCity] = useState('')
  const [stateCountry, setStateCountry] = useState('')
  const [cellphone, setCellphone] = useState('')

  const [isErrorInForm, setIsErrorInForm] = useState(false)
  const [card, setCard] = useState('')

  const [inputNameError, setInputNameError] = useState('')
  const [inputLastNameError, setInputLastNameError] = useState('')
  const [inputEmailError, setInputEmailError] = useState('')
  const [inputZipCodeError, setInputZipCodeError] = useState('')
  const [inputAddressError, setInputAddressError] = useState('')
  const [inputAddressNumberError, setInputAddressNumberError] = useState('')
  const [inputCityError, setInputCityError] = useState('')
  const [inputCountryError, setInputCountryError] = useState('')
  const [inputCellphoneError, setInputCellphoneError] = useState('')

  const [orderId, setOrderId] = useState(0)
  // const isValidInput = (value: string) => {
  //   if (!value || value === '') {
  //     setErrorText('Campo inválido')
  //     setShowInputError(true)
  //     return false
  //   }
  //   return true
  // }

  const isValidName = (value: string) => {
    if (!value || value === '') {
      setInputNameError('Nome inválido')
      return false
    }
    setInputNameError('')
    return true
  }

  const isValidLastName = (value: string) => {
    if (!value || value === '') {
      setInputLastNameError('Sobrenome inválido')
      return false
    }
    setInputLastNameError('')
    return true
  }

  const isValidEmail = (value: string) => {
    if (!isEmail(value)) {
      setInputEmailError('E-mail inválido')
      return false
    }
    setInputEmailError('')
    return true
  }

  const isValidZipCode = (value: string) => {
    if (!value || value === '') {
      setInputZipCodeError('Zip code inválido')
      return false
    }
    setInputZipCodeError('')
    return true
  }

  const isValidAddress = (value: string) => {
    if (!value || value === '') {
      setInputAddressError('Endereço inválido')
      return false
    }
    setInputAddressError('')
    return true
  }

  const isValidAddressNumber = (value: string) => {
    if (!value || value === '') {
      setInputAddressNumberError('Número da casa inválido')
      return false
    }
    setInputAddressNumberError('')
    return true
  }

  const isValidCity = (value: string) => {
    if (!value || value === '') {
      setInputCityError('Cidade inválida')
      return false
    }
    setInputCityError('')
    return true
  }
  const isValidCountry = (value: string) => {
    if (!value || value === '') {
      setInputCountryError('Região inválida')
      return false
    }
    setInputCountryError('')
    return true
  }

  const isValidCellphone = (value: string) => {
    if (!value || value === '') {
      setInputCellphoneError('Celular inválido')
      return false
    }
    setInputCellphoneError('')
    return true
  }

  const ValidateForm = () => {
    let isthrowError = false
    if (!isValidName(name)) isthrowError = true
    if (!isValidLastName(lastName)) isthrowError = true
    if (!isValidEmail(email)) isthrowError = true
    if (!isValidZipCode(zipCode)) isthrowError = true
    if (!isValidAddress(address)) isthrowError = true
    if (!isValidAddressNumber(addressNumber)) isthrowError = true
    if (!isValidCity(city)) isthrowError = true
    if (!isValidCellphone(cellphone)) isthrowError = true
    if (isthrowError) throw new Error('')

    setIsErrorInForm(false)
  }

  const createOrderShipping = (): OrderShipping => {
    return {
      first_name: name,
      last_name: lastName,
      company: '',
      address_1: address,
      address_2: '',
      city,
      state: stateCountry,
      postcode: zipCode,
      country
    }
  }

  const createOrderBilling = (): OrderBilling => {
    return {
      first_name: name,
      last_name: lastName,
      company: '',
      address_1: address,
      address_2: '',
      city,
      state: stateCountry,
      postcode: zipCode,
      country,
      email: email,
      phone: cellphone
    }
  }

  const createShippingLines = (freightTotal: number): ShippingLines[] => {
    return [
      {
        method_id: 'flat_rate',
        method_title: 'Flat Rate',
        total: `${freightTotal}`
      }
    ]
  }

  const handleNextClick = () => {
    try {
      ValidateForm()
      setCheckoutStep(checkoutStep + 1)
    } catch (error) {
      setIsErrorInForm(true)
    }
  }

  const handlePreviousClick = () => {
    setCheckoutStep(checkoutStep - 1)
  }
  return (
    <CheckoutContext.Provider
      value={{
        checkoutStep,
        setCheckoutStep,
        isErrorInForm,
        setIsErrorInForm,
        name,
        setName,
        lastName,
        setLastName,
        email,
        setEmail,
        country,
        setCountry,
        zipCode,
        setZipCode,
        address,
        setAddress,
        addressNumber,
        setAddressNumber,
        city,
        setCity,
        stateCountry,
        setStateCountry,
        cellphone,
        setCellphone,
        card,
        setCard,
        isValidName,
        isValidLastName,
        isValidEmail,
        isValidZipCode,
        isValidAddress,
        isValidAddressNumber,
        isValidCity,
        isValidCellphone,
        isValidCountry,
        ValidateForm,
        inputNameError,
        setInputNameError,
        inputLastNameError,
        setInputLastNameError,
        inputEmailError,
        setInputEmailError,
        inputZipCodeError,
        setInputZipCodeError,
        inputAddressError,
        setInputAddressError,
        inputAddressNumberError,
        setInputAddressNumberError,
        inputCityError,
        setInputCityError,
        inputCellphoneError,
        setInputCellphoneError,
        inputCountryError,
        setInputCountryError,
        createOrderShipping,
        createOrderBilling,
        handleNextClick,
        handlePreviousClick,
        orderId,
        setOrderId,
        createShippingLines
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </CheckoutContext.Provider>
  )
}

function useCheckoutContext(): CheckoutContextProps {
  const context = useContext(CheckoutContext)

  if (!context)
    throw new Error(
      'useCheckoutContextProvider must be used within an CheckoutContextProvider.'
    )

  return context
}

export { CheckoutContextProvider, useCheckoutContext }

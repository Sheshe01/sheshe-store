import React from 'react'
import PrimaryInput from 'components/common/PrimaryInput'
import { useCheckoutContext } from 'context/CheckoutContext'
import * as Styles from './styles'
import { useCartContext } from 'context/CartContext'
import SelectInput from 'components/common/SelectInput'
import { regions, RegionType } from 'data/regions'

const PersonalData: React.FC = () => {
  const {
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
    isValidName,
    isValidLastName,
    isValidEmail,
    isValidZipCode,
    isValidAddress,
    isValidAddressNumber,
    isValidCity,
    isValidCellphone,
    inputNameError,
    inputLastNameError,
    inputEmailError,
    inputZipCodeError,
    inputAddressError,
    inputAddressNumberError,
    inputCityError,
    inputCellphoneError
    // showInputError
  } = useCheckoutContext()

  const { selectedCity, setSelectedCity } = useCartContext()

  const handleOptionSelect = (regionName: string) => {
    const regionWithZone = regions.find(region => region.name === regionName)
    setSelectedCity(regionWithZone as RegionType)
    setCountry(regionWithZone ? regionWithZone.name : '')
  }

  return (
    <Styles.PersonalDataContainer>
      <Styles.FormSection>
        <PrimaryInput
          placeholder="Nome"
          type="text"
          value={name}
          inputError={inputNameError}
          onInputChange={setName}
          validate={isValidName}
        />
        <PrimaryInput
          placeholder="Sobrenome"
          type="text"
          value={lastName}
          inputError={inputLastNameError}
          onInputChange={setLastName}
          validate={isValidLastName}
        />
      </Styles.FormSection>
      <PrimaryInput
        placeholder="E-mail"
        type="email"
        value={email}
        inputError={inputEmailError}
        onInputChange={setEmail}
        validate={isValidEmail}
      />
      <SelectInput
        options={regions}
        handleSelectChange={handleOptionSelect}
        optionSelected={selectedCity ? selectedCity.name : ''}
        placeholder="Região"
      />
      <PrimaryInput
        placeholder="Cidade"
        type="text"
        value={city}
        inputError={inputCityError}
        onInputChange={setCity}
        validate={isValidCity}
      />
      <PrimaryInput
        placeholder="Zip code"
        type="text"
        value={zipCode}
        inputError={inputZipCodeError}
        onInputChange={setZipCode}
        validate={isValidZipCode}
      />
      <Styles.FormSection>
        <PrimaryInput
          placeholder="Endereço"
          type="text"
          value={address}
          inputError={inputAddressError}
          onInputChange={setAddress}
          validate={isValidAddress}
        />
        <PrimaryInput
          placeholder="Número"
          type="number"
          value={addressNumber}
          inputError={inputAddressNumberError}
          onInputChange={setAddressNumber}
          validate={isValidAddressNumber}
        />
      </Styles.FormSection>
      <PrimaryInput
        placeholder="Celular"
        type="text"
        value={cellphone}
        inputError={inputCellphoneError}
        onInputChange={setCellphone}
        validate={isValidCellphone}
      />
    </Styles.PersonalDataContainer>
  )
}

export default PersonalData

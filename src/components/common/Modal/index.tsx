import React from 'react'
import ReactModal from 'react-modal'
import { useCartContext } from 'context/CartContext'
import { regions, RegionType } from 'data/regions'
import * as Styled from './styles'
import Text from '../Text'
import ButtonElement from '../ButtonElement'
import SelectInput from '../SelectInput'
import { useCheckoutContext } from 'context/CheckoutContext'

const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
const Modal: React.FC = () => {
  const {
    modalIsOpen,
    setModalIsOpen,
    AddCityToFreight,
    selectedCity,
    setSelectedCity
  } = useCartContext()

  const { setCountry } = useCheckoutContext()

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const handleOptionSelect = (regionName: string) => {
    const regionWithZone = regions.find(region => region.name === regionName)
    setSelectedCity(regionWithZone as RegionType)
    setCountry(regionWithZone ? regionWithZone.name : '')
  }

  const handleOkClick = () => {
    AddCityToFreight(selectedCity as RegionType)
    setModalIsOpen(false)
  }

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Styled.ModalHeader>
          <Text as="h1" heading={100}>
            Selecione a sua região:
          </Text>
          <button onClick={handleCloseModal}>X</button>
        </Styled.ModalHeader>
        <SelectInput
          options={regions}
          handleSelectChange={handleOptionSelect}
          optionSelected={selectedCity ? selectedCity.name : ''}
        />
        <Styled.TextModal>
          <ButtonElement handleClick={handleOkClick}>Ok</ButtonElement>
        </Styled.TextModal>
      </ReactModal>
    </div>
  )
}

export default Modal

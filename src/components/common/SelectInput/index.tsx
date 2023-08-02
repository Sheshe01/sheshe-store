import { RegionType } from 'data/regions'
import React from 'react'

import * as Styled from './styles'

type SelectInputProps = {
  options: RegionType[]
  handleSelectChange: (value: string) => void
  optionSelected: string
  placeholder?: string
  hideLabel?: boolean
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  handleSelectChange,
  optionSelected,
  placeholder,
  hideLabel
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(event.target.value)
  }
  return (
    <Styled.SelectContainer>
      {placeholder && !hideLabel ? (
        <Styled.Label>{placeholder}</Styled.Label>
      ) : null}
      <Styled.Select onChange={handleOnChange}>
        <option selected disabled>
          Escolha uma
        </option>
        {options.map(op => (
          <option
            key={op.id}
            value={op.name}
            selected={optionSelected === op.name}
          >
            {op.name}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectContainer>
  )
}

export default SelectInput

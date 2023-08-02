import React from 'react'

import ErrorMessage from '../ErrorMessage'
import * as Styled from './styles'
import { PrimaryInputProps } from './types'

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  type,
  validate,
  onInputChange,
  value,
  sufix,
  placeholder,
  hideLabel,
  inputError,
  ...rest
}) => {
  const handleValidate = (value: string) => {
    validate(value)
  }

  const refinedValue = value === undefined || value === null ? '' : value

  return (
    <Styled.PrimaryInputContainer>
      {placeholder && !hideLabel ? (
        <Styled.Label>{placeholder}</Styled.Label>
      ) : null}
      <div>
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          value={refinedValue}
          className={`primary-input ${
            inputError ? 'primary-input--error' : ''
          }`}
          onChange={event => onInputChange && onInputChange(event.target.value)}
          onBlur={event => handleValidate(event.target.value)}
        />
      </div>
      {sufix ? <Styled.Sufix>{sufix}</Styled.Sufix> : null}
      <ErrorMessage
        errors={inputError || inputError.length !== 0 ? [inputError] : []}
      />
    </Styled.PrimaryInputContainer>
  )
}

export default PrimaryInput

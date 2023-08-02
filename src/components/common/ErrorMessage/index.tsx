import React from 'react'
import * as Styled from './styles'
import { ErrorMessageProps } from './types'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => (
  <Styled.ErrorMessageUL
    className={`error-message__container ${
      errors.length !== 0 ? '' : 'hidden'
    }`}
  >
    {errors.map((error, index) => (
      <Styled.ErrorMessageLI key={`error-${index}`}>
        {error}
      </Styled.ErrorMessageLI>
    ))}
  </Styled.ErrorMessageUL>
)

export default ErrorMessage

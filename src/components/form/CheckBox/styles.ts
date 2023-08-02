import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.x2} 0;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

interface StyledCheckboxProps {
  defaultChecked: boolean
  focused: boolean
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  min-width: 24px !important;
  width: 24px !important;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.grey.regular};
  border-radius: 4px;

  ${props =>
    props.focused &&
    css`
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        border: 2px solid ${({ theme }) => theme.colors.orange.extraBold};
        border-radius: 4px;
      }
    `};

  ${props =>
    props.defaultChecked &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.orange.extraBold};
      background: ${({ theme }) => theme.colors.orange.extraBold};
      position: relative;

      &::after {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        top: calc(50% - 4px);
        left: calc(50% - 4px);
        background: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
      }
    `};
`

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.small};
  span {
    font-size: ${({ theme }) => theme.font.size.label};
  }
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.x2};
`

import styled from 'styled-components'
import { MenuToggleProps } from './types'

export const MenuToggleWrapper = styled.div`
  margin-right: auto;
  z-index: 1000;
`

export const MenuToggleInput = styled.input`
  opacity: 0;
  margin-top: 1rem;
  width: 1.5rem;
  height: 1.5rem;
`

export const MenuToggleIcon = styled.div<MenuToggleProps>`
  transform: translateY(-1.5rem);
  pointer-events: none;
  transition-property: all;
  transition-duration: 250ms;

  > div {
    transition-property: all;
    transition-duration: 250ms;
  }

  ${({ isCollapsed }) =>
    isCollapsed &&
    `
    transform: translateY(-1.5rem) rotate(180deg);

    .first-line {
      transform: rotate(45deg) translateX(4px);
    }

    .second-line {
      transform: rotate(-45deg) translateX(3px);
    }

    .third-line {
       opacity: 0;
    }
  `}
`

export const MenuToggleIconLine = styled.div<MenuToggleProps>`
  border-top: 2px solid ${({ theme }) => theme.colors.orange.extraBold};
  margin-bottom: 3px;
`

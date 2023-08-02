import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled(motion.header).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['headerIsOpen'].includes(prop) && defaultValidatorFn(prop)
})<{ headerIsOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  color: black;
  margin-left: ${({ theme }) => theme.spacing.x2};
  cursor: pointer;
  height: 40px;
  ${({ headerIsOpen }) => `
    ${
      headerIsOpen &&
      `
        svg {
          transform: rotate(180deg);
        }
      `
    }
  `}
`

export const Section = styled(motion.section)`
  overflow: hidden;
`

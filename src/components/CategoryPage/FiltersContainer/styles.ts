import styled from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styles/media'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.x2};
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.spacing.x4} 0
    ${({ theme }) => theme.spacing.x4} 0;
`

export const ContainerText = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.x2};
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`

export const ContainerFiltersList = styled(motion.div)`
  position: absolute;
  width: 100%;
  max-width: 1220px;
  background-color: ${({ theme }) => theme.colors.white};
  border-style: none solid solid solid;
  border: 1px solid ${({ theme }) => theme.colors.grey.regular};
  box-sizing: border-box;
  transform-origin: 50% -30px;
  top: 570px;
  z-index: 1000;
  ${media.lessThan('tablet')`
    width:80%;
    top: 620px;
  `}
`
export const MotionDiv = styled(motion.div)`
  padding: 0 20px;
`

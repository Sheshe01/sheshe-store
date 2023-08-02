import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`

export const ProgressBar = styled.div<{ step: number }>`
  width: calc(33% * ${props => props.step});
  height: 10px;
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
`

export const LabelBar = styled.div<{ step: number }>`
  width: calc(33% * ${props => props.step});
  margin-top: 0.5rem;
  text-align: center;
`

export const Step = styled.div`
  border-radius: 40%;
  width: 2%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow.regular};
  color: ${({ theme }) => theme.colors.white};
`

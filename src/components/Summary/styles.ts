import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  border-radius: 6px;
  height: 137px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;

  strong {
    display: block;
    font-weight: bold;
    font-size: 2rem;
  }

  // aplicando background verde ao ultimo filho
  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-700']};
  `}
`

export const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme['gray-300']};
`
import { Heading, SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <Heading>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Heading>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <Heading>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />

        </Heading>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <Heading>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Heading>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
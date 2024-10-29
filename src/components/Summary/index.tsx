import { Heading, SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <Heading>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Heading>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <Heading>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </Heading>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <Heading>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Heading>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

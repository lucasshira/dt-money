import { useContext } from "react";
import { Heading, SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }
    
    return acc;
  }, { income: 0, outcome: 0, total: 0 });
  
  return (
    <SummaryContainer>
      <SummaryCard>
        <Heading>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Heading>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <Heading>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />

        </Heading>
        <strong>{summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <Heading>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Heading>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
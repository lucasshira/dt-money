import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      
      <SearchForm />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>

            <tr>
              <td width="50%">Sushi</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 89,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>08/04/2024</td>
            </tr>

            <tr>
              <td width="50%">Sushi</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 5.400,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>08/04/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/*
Por que que um componente renderiza no React? Basicamente tem 3 motivos para isso ocorrer:

1 - Hooks changed (mudou estado, contexto, reducer);
2 - Props changed (mudou propriedades)
3 - Parent rerendered (componente PAI renderizou, portanto acaba renderizando novamente tds seus filhos)
*/

/*
Qual o fluxo de renderizacao? O fluxo basicamente tem 3 passos

1 - O React recria o HTML da interface daquele componente (recria na memoria)
2 - Compara a versao do HTML recriada com a versao anterior (O React compara a nova visualizacao)
3 - SE mudou alguma coisa, ele reescreve o HTML na tela com as novas alteracoes
*/

/*
NOTA*: Todo esse fluxo eh extremamente rapido, por isso que NEM SEMPRE vale muito a pena quebrar a cabeca 
e ficar tentando EVITAR renderizacoes a todo custo, as vezes pode ser perda de tempo
*/

/*
E SE o HTML de um componente que foi renderizado fosse enorme? 

A versao do HTML recriada e sendo comparada com a anterior ela iria ficar MT LENTA, pois o React teria que
comparar cada pedacinho daquele HTML grande novo que foi gerado com o antigo, cada detalhe. Ou seja, quanto
maior o componente no sentido do que ele retorna, mais necessario seria buscar alteranativas pois ele ficara
cada vez mais lento devido suas recriacoes grandes. SOMENTE NESSES CASOS, DEVEMOS usar o react Memo

React Memo = O memo eh uma funcao que vem de dentro do React, que usamos para MEMORIZAR determiando componente

Quando usamos o memo, o fluxo de renderizacao do React acaba mudando um pouco:

Memo: 
0 - Ele ira olhar no passo 0 se ALGUMA COISA MUDOU nos hooks do meu componente, ou mudou alguma coisa nas props?
0.1 - Comparar com a versao anterior dos hooks e props 
0.2 - se mudou algo, ele ira PERMITIR a nova renderizacao (apenas para os que tivere mudado)
*/

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
    console.log(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

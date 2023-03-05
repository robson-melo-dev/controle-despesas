import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const ReceitasDespesas = () => {
  const {transactions} = useContext(GlobalContext) //contexto global do aplicativo
  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts
    .filter(item => item > 0) //filtra apenas os valores positivos (receitas)
    .reduce((acc, item) => (acc += item), 0) //soma todas as receitas
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * //filtra e soma os números negativos(despesas)
    -1
  ).toFixed(2);
  

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Receitas</h4>
        <p className="money plus">
          +R${income}
        </p>
      </div>
      <div>
        <h4>Despesas</h4>
        <p className="money minus">
          -R${expense}
        </p>
      </div>
    </div>
  );
};

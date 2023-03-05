import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balanco = () => {
  const {transactions} = useContext(GlobalContext) //contexto global do aplicativo
  const amounts = transactions.map(transaction => transaction.amount); // cria um array apenas com os valores
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //soma os valores até obter o total 
  
  return (
    <>
      <h4>Seu saldo</h4>
      <h1>R${total}</h1>
    </>
  );
};

import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transacao } from "./Transacao";


export const Transacoes = () => {
  const {transactions} = useContext(GlobalContext)
  localStorage.setItem('transactions', JSON.stringify({transactions})) //armazena todas as transações na LocalStorage a cada mudança nas transações


  return (
    <>
      <h3>Histórico de Transações</h3>
      
      <ul className="list">
      {transactions.map(transaction => (<Transacao key = {transaction.id} transaction = {transaction}/>))}
      </ul>
    </>
  );
};

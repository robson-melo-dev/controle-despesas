import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transacao } from "./Transacao";


export const Transacoes = () => {
  const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h3>Histórico de Transações</h3>
      
      <ul className="list">
      {transactions.map(transaction => (<Transacao key = {transaction.id} transaction = {transaction}/>))}
      </ul>
    </>
  );
};

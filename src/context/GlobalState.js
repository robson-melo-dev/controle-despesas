import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//State inicial

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
//let transactions = localStorage.getItem('transactions') != null ? localStorageTransactions : []

const initialState = {
  transactions: localStorage.getItem('transactions') != null ? localStorageTransactions.transactions :
  [
    { id: 3, text: "Supermercado", amount: -800 },
    { id: 2, text: "Eletricidade", amount: -170 },
    { id: 1, text: "Salário", amount: 1800 }
  ]
};

//Cria o contexto
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Ações
  function deleteTransaction(id){
    dispatch ({
        type: 'DELETE_TRANSACTION',
        payload: id
    })    
  }

  function addTransaction(transaction){
    dispatch ({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })    
  }


  return <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>{children}</GlobalContext.Provider>;
};

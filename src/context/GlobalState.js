import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//State inicial

const initialState = {
  transactions: [
    { id: 1, text: "Salário", amount: 1500 },
    { id: 2, text: "Ganho no jogo do bixo", amount: 150 },
    { id: 3, text: "Itaipava", amount: -120 },
    { id: 4, text: "Corote", amount: -50 },
    { id: 5, text: "Carne", amount: -300 },
    { id: 6, text: "Arroz", amount: -40 },
    { id: 7, text: "Apostas jogo do bixo", amount: -300 }
  ],
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

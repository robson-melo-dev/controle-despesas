import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const AdicionarTransacao = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState('') //armazena o texto da transação
  const [amount, setAmount] = useState(0) //armazena o valor da transação

  const onSubmit = e =>{
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text, 
      amount : +amount 
    }

    addTransaction(newTransaction);
    
    
  }
  


  return (
    <>
      <h3>Adicione uma Transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite o texto..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (negativo = despesa, positivo = receita)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} valueplaceholder="Digite o valor..." />
        </div>
        <button className="btn">Add transação</button>
      </form>
    </>
  );
};

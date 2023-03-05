import "./App.css";
import { Header } from "./components/Header";
import { Balanco } from "./components/Balanco";
import { ReceitasDespesas } from "./components/ReceitasDespesas";
import { Transacoes } from "./components/Transacoes";
import { AdicionarTransacao } from "./components/AdicionarTransacao";

import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balanco />
        <ReceitasDespesas />
        <Transacoes />
        <AdicionarTransacao />
      </div>
    </GlobalProvider>
  );
}

export default App;

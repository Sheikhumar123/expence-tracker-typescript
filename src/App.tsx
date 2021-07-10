
//Components
import Header from './Components/Header';

//import css file
import "./app.css"
import Balance from './Components/Balance';
import Income from './Components/Income';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';



import { GlobalProvider } from './Context/GlobalState';

const App = () => {


  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <Income />
          <TransactionList />
          <AddTransaction />
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;

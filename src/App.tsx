import './App.css';
import PageHeader from './components/PageHeader';
import Search from './components/Search';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div>
        <PageHeader/>
        <Search/>
        <Transactions/>
    </div>
);
}

export default App;

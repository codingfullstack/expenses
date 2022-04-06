import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HistoryList from './component/HistoryList/HistoryList';
import AddTransation from './component/addTrancation/AddTrancation';
import './style/style.scss'
import Balance from './component/balance/Balance';


function App() {
  return (

    <Container className='my-5 w-50 rounded app'>
      <div className="App">
        < Balance />
        <HistoryList title="Expenses" />
        <HistoryList title="Income" />
        <AddTransation />
      </div>
    </Container>


  );
}

export default App;

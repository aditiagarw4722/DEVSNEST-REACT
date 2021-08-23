import './App.css';
import Form from './components/Form';
import Data from './data.json';
import Listtodo from './components/listtodo';
import {Provider} from 'react-redux';
import Store from '../store';
function  App () {

  return (
    <div className="App">
      <h1> Add To Do List</h1>
      <Form />
      <Data />
      <Listtodo />
      <Provider />
      <Store />
    
    </div>
  );
};

export default App;

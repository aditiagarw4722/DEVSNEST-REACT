import './App.css';
import useFetch from './components/useFetch';
import Card from './components/card';
function App() {

  const {data,error}=useFetch("https://random.imagecdn.app/500/150");
  //const {data,error}=useFetch("https://jsonplaceholder.typicode.com/photos");



  return (
    <div className="App">
            { error && <div> { error} </div>}
            { data && <Card image={data.url}/> }
    </div>
  );
}

export default App;
import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero  from './components/hero/hero';
import Home from './screens/home/home';
import Loader from './components/loader/loader';
function App() {
  const [loading, setLoading]=useState('')

  useEffect (()=> {
    setLoading('none')
  },[])
  return (
    <div className="App">
      <div style={{display:loading}}>
      <Loader />
      </div>
      
      <Home/>
     
    </div>
  );
}

export default App;

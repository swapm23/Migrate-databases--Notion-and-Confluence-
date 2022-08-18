import './App.scss';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RichTextEditor from './components/RichTextEditor'
import TokenForm from './components/TokenForm'
import { useEffect, useState } from 'react';

function App() {

      const[database_notion, setValue]= useState([])
      useEffect(()=>{
        const fetchData = async() => {
          const res = await fetch('http://localhost:5000/getNotionDatabase')
          const data = await res.json()
          console.log(data)
        }
        fetchData()
      })


  return (
    <div className="App">
      
      <Navbar/>
      <div className="container-fluid">
      <div className="row">
        <div className="col"><hr/><TokenForm /><hr/></div>
        <div className="col"><hr/><RichTextEditor/></div>
      </div>        
      </div>

      
    </div>
  );
}

export default App;

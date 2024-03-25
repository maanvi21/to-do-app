import React,{useState} from 'react';
import './App.css';
import { TodoWrapper } from './Components/Todowrapper';



function App() {
  const [name,setName]= useState("User!")
  const showAlertWithInput = () => {
    const userInput = window.prompt('What can we call you?');
    if (userInput !== null) {
      alert( "Hello,"+userInput);
      setName(userInput);
    }
  };
  return (
    
    <div >

      <h1>hello {name}!  </h1>
      <button onClick={showAlertWithInput}>Get Started</button>

      
     <TodoWrapper/>
     
   
    </div>
  );
}

export default App;

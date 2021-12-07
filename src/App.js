import './App.css';
import Main from './Main';
import React, {useState, useEffect} from 'react'
function App() {
  useEffect(()=>{  
    if(JSON.parse(sessionStorage.getItem('userList'))==null){
      let userList=[]
      sessionStorage.setItem('userList',JSON.stringify(userList))
    }
   
},[JSON.parse(sessionStorage.getItem('userList'))])
  return (
    <div>
   <Main/>
    </div>
  );
}

export default App;

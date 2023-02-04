
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const text = ["Ульяна", "С сиром", "И с черным" , "хлебом" , "И в микроволновку", "На 40 сек", "ммм"]
  const [name, setName] = useState(0)

  const toggle = () =>{
    if(name==text.length-1)
      setName(0)
    else
      setName(prev => prev +1)
    
  }
useEffect(()=>{
  window.addEventListener("click", toggle)
  return  () => {
    window.removeEventListener("click", toggle)
  }
},[toggle])

  return (
    <div  className={`App `}>
     {text[name]}
    </div>
  );
}

export default App;

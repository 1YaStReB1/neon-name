
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ульяна")
  const [small, setSmall] = useState(false)
  const toggle = () =>{
    if(name==="Ульяна"){
      setName("С сиром")
      setSmall(true)
    }
    else{
      setName("Ульяна")
      setSmall(false)
    }
  }
useEffect(()=>{
  window.addEventListener("click", toggle)
  return  () => {
    window.removeEventListener("click", toggle)
  }
},[toggle])

  return (
    <div  className={`App ${small && "sm"}`}>
     {name}
    </div>
  );
}

export default App;

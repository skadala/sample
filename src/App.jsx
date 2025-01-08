import { useState,lazy ,Suspense} from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Mainc'
import Content from './components/Content'
// import Footer from './components/Footer'
const Footer =lazy(()=>import('./components/Footer'))
function App() {
   const [count, setCount] = useState(0)
  const inc=()=>{
    setCount(count=>count+1)
  }
  
  return (
    <>
      <div>
    <Header/>
    <button onClick={inc}>click{count}</button>
    <Main/>
    <Content/>
<Suspense fallback={""}>
   {count>6?<Footer/>:<Content/>}
</Suspense>
    
    </div>
       
    </>
  )
}

export default App

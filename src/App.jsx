import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)

  const onClickButton = (value) =>{
    setCount(count + value)
  }

  return (
    // 이렇게 해주어야만 App.css안의 내용이 적용된다
    <div className="App"> 
    <h1>Simple counter</h1>
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
  </div>
  )
}

export default App

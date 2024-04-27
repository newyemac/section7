import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count,setCount] = useState(0)
  const isMount = useRef(false) // 초기값 설정

        //1. 마운트 : 탄생
        useEffect(()=>{
          console.log("mount")
        },[])

        //2. 업데이트 : 변화, 리렌더링
        useEffect(()=>{
          if(!isMount.current){
            isMount.current = true
            return
          }
          console.log("update")
        })
        //3. 언마운트 : 죽음
  const onClickButton = (value) =>{
    setCount(count + value)
  }

  return (
    // 이렇게 해주어야만 App.css안의 내용이 적용된다
    <div className="App"> 
    <h1>Simple counter</h1>
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
  </div>
  )
}

export default App

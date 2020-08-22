import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './service'
import { quiztype, radioName } from './quiztypes'
import { Radio } from './checkbox'

function App() {
  
  let [quizstate , setQuiz] = useState<quiztype[]>([])
  let [counter, setCounter] = useState(0)
  let [rname, setRname]     = useState<radioName>({rdname:'work'})
  useEffect(()=>{
    const generatequiz = async() =>{
      const res:quiztype[] = await Quiz()
      setQuiz(res)
      console.log('check', res) 
    }
    generatequiz()
  },[])

  function order(q : String){ 
  
      return(
        <div className='question'>
        <span>
          { q }
        </span>
        </div>
      )
    } 

  function handle(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setCounter(counter + 1)
  }

    if(!quizstate.length  )
    return(<h1>LOADING....</h1>)
    if(counter === 10)
    return(<h1> Thanks for playing !!!</h1>)
  return (
    <div className="App">
      <div className='heading'> <h1>  QUESTION APP </h1></div>
      <div className="App-header">
        { order(quizstate[counter].question) }
        <hr style = {{height:'12px',border: '0',
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)'}} />
        <form>
        <Radio ques={quizstate[counter]} />
        <button type='submit' onClick= {handle}>NEXT >> </button>
        </form>
      </div>
    </div>
  );
}

export default App;

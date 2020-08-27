 import React, { JSXElementConstructor, useState } from 'react'
import './chk.css'
import {quiztype} from './quiztypes'


 export const Radio = (props:{ques:quiztype}) :any => {
     let counter = -1
     let [checked, setChecked] = useState('')
     
     const handle = (event : React.ChangeEvent<HTMLInputElement>) => {
         console.log('Radio', event.target.value)
         setChecked(event.target.value)
     }

     const correct_answer = {
         color : 'green'
     }

     return(
        props.ques.correctAns.map((ans : String) => {
            counter +=1
            return(
                <div onChange = {handle}>
                   <p>
                       <input type="radio" 
                       id= {`${counter} + id`} 
                       name='rad' 
                       value = {`${props.ques.correctAns[counter]}`}
                       checked =  { checked === `${props.ques.correctAns[counter]}`} />
                       <label htmlFor= {`${counter} + id`} 
                       style = { checked === `${props.ques.correctAns[counter]}` ?
                       `${props.ques.correctAns[counter]}` === props.ques.correct ? {color:'lime'}
                        : {color:'Red'}
                        : {color:'rgb(46, 41, 41);'}} > {ans} </label>
                   </p>
                     </div>
                )
         })
     )
    
    
 }

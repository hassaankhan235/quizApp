import axios from 'axios'
import { QuizDef, quiztype } from './quiztypes'


const Quiz = async () :Promise<quiztype[]> => {

    const shuffle = (arr : quiztype[]) : quiztype[] => {
        arr.map(arr => {
            const array = arr.correctAns
            let currentIndex = array.length
            while(currentIndex !== 0) {
                const randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex--
                // console.log('current & swap', array[currentIndex] ,array[randomIndex] )
    
                const tempValue = array[currentIndex]
                array[currentIndex] = array[randomIndex]
                array[randomIndex] = tempValue
            }
        })
       
        return arr
    }



    const a = await axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple') 
   
    const questions: quiztype[] = a.data.results.map((item : QuizDef) => ({
        question : item.question,
        correctAns : item.incorrect_answers.concat(item.correct_answer),
        correct  : item.correct_answer
    }))
    console.log('quizes are', questions)
    const quiz = shuffle(questions)
    return quiz
}
export default Quiz
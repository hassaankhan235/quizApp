import { type } from "os"

export type QuizDef = {
    category: String 
    correct_answer: String
​​​    difficulty: String
​​​​    incorrect_answers: String[]
​​​​    question: String
​​​​    type: String
}

export type quiztype = {
    question: String
    correctAns : String[]
    correct : String
}
export type radioName = {
    rdname : String
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Answers } from './Answers'
import './CurrentQuestion.css';
import { quiz } from 'reducers/quiz'

/** API related variables, if any are used on the index page, then these should be put in the store.  */
const NUMBEROFQUESTIONS = 10;
const DIFFICULTY = "easy"; /** easy, medium, difficult */
const URL = `https://opentdb.com/api.php?amount=${NUMBEROFQUESTIONS}&difficulty=${DIFFICULTY}&type=multiple`;
const USEAPI = true;

/* Adds the answer into the array on a random place */
const shuffleArray = (wronganswers, answer) => {
  const answerIndex = Math.round(Math.random() * wronganswers.length);
  wronganswers.splice(answerIndex, 0, answer);
  return {
    options: wronganswers,
    correctAnswerIndex: answerIndex
  };
};

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()

  let questions = useSelector((state) => state.quiz.questions) /************** FIX QUESTION ARRAY HERE! */
  console.log(questions)
  
  useEffect(() => {
    if (!USEAPI) {
      return;
    }
    dispatch(quiz.actions.updateQuestionsFromAPI([])) /** If API questions should be used, empty questions array before. */
    fetch(URL, {
      method: "get"
    })
      .then(res => res.json())
      .then(json => {
        const questionList = json.results; /** List with  */
        let idCounter = 0;
        const qListTransformed = questionList.map(q => {
          /** Transform each item from the API to conform with our quiz format */
          idCounter++; /** Sets the ID for the question incrementally */
          const shuffledAnswersArray = shuffleArray(q.incorrect_answers, q.correct_answer); /** Inserts the correct answer at a random place, and returns array with (1) all alternatives and (2) the index with the correct answer */
          
          return {
            id: idCounter,
            questionText: q.question,
            options: shuffledAnswersArray.options,
            correctAnswerIndex: shuffledAnswersArray.correctAnswerIndex
          };
        });
        console.log(qListTransformed);
        dispatch(quiz.actions.updateQuestionsFromAPI(qListTransformed))
      });
  }, []);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (

    <div className="container">
      <div className="question">
        <h1>Question:</h1>
        <h2>{question.questionText}</h2>
      </div>
     <Answers/>
    </div>
    

  )
}

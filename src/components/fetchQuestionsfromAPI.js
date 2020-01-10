import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

/** API related variables, if any are used on the index page, then these should be put in the store.  */
const NUMBEROFQUESTIONS = 6;
const DIFFICULTY = "easy"; /** easy, medium, difficult */
const URL = `https://opentdb.com/api.php?amount=${NUMBEROFQUESTIONS}&difficulty=${DIFFICULTY}&type=multiple&encode=url3986`;

/* Adds the answer into the array on a random place */
const shuffleArray = (wronganswers, answer) => {
  const answerIndex = Math.round(Math.random() * wronganswers.length);
  wronganswers.splice(answerIndex, 0, answer);
  return {
    options: wronganswers,
    correctAnswerIndex: answerIndex
  };
};


/** Unescape options to reformat strongs to correct format. E.g. %20 becomes a space, ;quot% becomes a " */
const unescapeOptionsStrings = (options) => {
  return options.map(option => unescape(option))
}

export const useFetchQuestionsfromAPI = (bool) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!bool) {
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
            questionText: unescape(q.question),
            options: unescapeOptionsStrings(shuffledAnswersArray.options),
            correctAnswerIndex: shuffledAnswersArray.correctAnswerIndex
          };
        });
        console.log(qListTransformed);
        dispatch(quiz.actions.updateQuestionsFromAPI(qListTransformed))
      });
  }, []);
}

import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText:
      "Which movie includes a giant bunny-like spirit who has magic powers including growing trees?",
    options: [
      "Hop",
      "Rise of the Guardians",
      "Alice in Wonderland",
      "My Neighbor Totoro"],
    correctAnswerIndex: 4
  },
  {
    id: 2,
    questionText:
      "Which movie sequel had improved box office results compared to its original film?",
    options: [
      "Toy Story 2",
      "Sin City: A Dame to Kill For",
      "Speed 2: Cruise Control",
      "Son of the Mask"],
    correctAnswerIndex: 1
  }
  {
    id: 3,
    questionText:
      "Who plays Alice in the Resident Evil movies?",
      options: [
        "Madison Derpe",
        "Milla Jovovich",
        "Milla Johnson",
        "Kim Demp"],
    correctAnswerIndex: 2
  }
  {
    id: 4,
    questionText:
      "Who is the main protagonist in, the 1985 film, Back to the Future?",
      options: [
        "Marty McFly",
        "Emmett &quot;Doc&quot; Brown",
        "Biff Tannen",
        "George McFly"],
    correctAnswerIndex: 1
  }
  {
    id: 5,
    questionText:
      "Who voices the main character Blu in the 2011 animated film &quot;Rio&quot;?",
      options: [
        "Michael Cera",
        "Jonah Hill",
        "Jesse Eisenberg",
        "Zach Galifianakis"],
    correctAnswerIndex: 3
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find(q => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: state => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuesionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    }
  }
});

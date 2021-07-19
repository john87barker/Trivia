import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";

class QuestionsService {
  addValue() {
    ProxyState.questions = [...ProxyState.questions, new Question({ title: Math.random() })]
  }
}

export const questionsService = new QuestionsService();


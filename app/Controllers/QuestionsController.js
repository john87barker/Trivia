import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let values = ProxyState.question;
  let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template


}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("question", _draw);
    _draw()
  }

  async getQuestion() {
    try {
      await questionsService.getQuestion()
    } catch (error) {
      window.alert("mistakes you made" + error)
    }
  }

  async moreQuestions(direction) {
    try {
      await questionsService.getQuestion(ProxyState[direction])
    } catch (error) {
      window.alert("mistakes you made" + error)
    }
  }

}

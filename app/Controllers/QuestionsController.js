import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let question = ProxyState.questions
  let template = ''
  question.forEach(q => template += q.Template)

  document.getElementById('question').innerHTML = template

  document.getElementById('buttons').innerHTML = `
  <button type="button" class="btn btn-warning" ${ProxyState.previous ? '' : 'disabled'}
    onclick="app.peoplesController.getMore('previous')">previous</button>
  <button type="button" class="btn btn-success" ${ProxyState.next ? '' : 'disabled'}
    onclick="app.peoplesController.getMore('next')">next</button>
  `


}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);
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

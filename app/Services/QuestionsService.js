import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js"

class QuestionsService {
  async getQuestion(url) {
    const res = await api.get(url)
    console.log(res.data.results)
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    let question = res.data.results.map(q => new Question(q))
    ProxyState.questions = question
  }

}

export const questionsService = new QuestionsService();


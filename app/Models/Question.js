export default class Value {
    constructor({ category, difficulty, question, correct_answer, incorrect_answer }) {
        this.category = category
        this.difficulty = difficulty
        this.question = question
        this.correct = correct_answer
        this.incorrect = incorrect_answer
    }

    get Template() {

        return /*html*/`
        <li> ${this.category} n/ ${this.question}n/ - ${this.correct}
        </li>
        `
    }
}

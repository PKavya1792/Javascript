export class Calculator {

    history = []

    constructor() {

    }

    add = (num1, num2) => {
        let answer = num1 + num2
        let equationAdd = (num1 + " + " + num2 + " = " + answer)
        this.history.push(equationAdd)
        return answer
    }
    
    sub = (num1, num2) => {
        let answer = num1 - num2
        let equationSub = (num1 + " - " + num2 + " = " + answer)
        this.history.push(equationSub)
        return answer
    }
    
    div = (num1, num2) => {
        let answer = num1 / num2
        let equationDiv = (num1 + " / " + num2 + " = " + answer)
        this.history.push(equationDiv)
        return answer
    }
    
    mul = (num1, num2) => {
        let answer = num1 * num2
        let equationMul = (num1 + " * " + num2 + " = " + answer)
        this.history.push(equationMul)
        return answer
    }
    
    getHistory = () => {
        return "Add: " + this.history[0] + "\n" +
               "Sub: " + this.history[1] + "\n" +
               "Div: " + this.history[2] + "\n" +
               "Mul: " + this.history[3]
    }
    
}


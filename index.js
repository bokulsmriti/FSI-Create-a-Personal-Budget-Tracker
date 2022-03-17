// Your Code Here
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
let weeklyExpenseQuestions = [1,2,3]
for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
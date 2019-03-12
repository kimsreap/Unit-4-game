
const getRand = cap => Math.floor(Math.random()*cap) + 1
let goalNum
let currNum = 0
let isGameOver = false

const init = _ => {
    isGameOver = false
    goalNum = getRand(120)
    currNum = 0
    document.querySelector('#goalNum').textContent = goalNum
   
    document.querySelector('#currNum').textContent = 0
    
    document.querySelector('#buttons').innerHTML = ''

    
    
    for (let i = 0; i < 4; i++){
        let btn = document.createElement('button')
        btn.className = 'someNum'
        btn.textContent = '';
        btn.setAttribute('data-value', getRand(20))
        document.querySelector('#buttons').append(btn)
    }
}

const reset = _ => {
    if (isGameOver){
        init()
    }
}

var win = 1
var losse = 1
const check = _ => {
    if (currNum === goalNum){
        isGameOver = true
        document.querySelector('#result').textContent = 'Well Done!!'
        document.querySelector('#win').textContent = win++

    }else if (currNum > goalNum) {
        isGameOver = true
        document.querySelector('#result').textContent = "Sorry You lose :("
        document.querySelector('#losse').textContent = losse++   
    }else {
      document.querySelector('#result').textContent = 'Please keep adding...'  
    }
}
document.addEventListener('click', e => {
    if (e.target.className === 'someNum' && !isGameOver){

        currNum += parseInt(e.target.dataset.value)
        document.querySelector('#currNum').textContent = currNum
        check()
    }
})

init()















// 4 Monkeys will display as buttons on page
// At the start of the game, Monkeys will generate random nymber
// When players click on monkeys, it will add th Num to the total's score
// players win if the scores equal to random number
// Player lose if the scores is grater than the random number
// Restart the game when the player win or lose
// Players will get a new set of radom Num on easch Monkey
// The numbers of win and losse will increment



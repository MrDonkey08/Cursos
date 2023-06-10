let playersAttack // it doesn't belong to a function so it's a global variable and can be accessed anywhere in this file
let enemysAttack
let winnerMessage
let playersLives
let enemysLives

function startGame(){
    document.getElementById('select-attack').style.display = 'none'
    document.getElementById('btn-restart').style.display = 'none'

    document.getElementById('btn-restart').addEventListener('click', restartGame)
    document.getElementById('btn-mokepon').addEventListener('click', selectmokepons)

    document.getElementById('btn-fire').addEventListener('click', fireAttack)
    document.getElementById('btn-water').addEventListener('click', waterAttack)
    document.getElementById('btn-ground').addEventListener('click', groundAttack)
}

function selectmokepons(){
    let mokepon = document.getElementById('players-mokepon')

    if (document.getElementById('hipodoge').checked){ // .checked returns true if the element is selected
        mokepon.innerHTML = 'Hipodoge'
    }
    else if (document.getElementById('capipe').checked){
        mokepon.innerHTML = 'Capipe'
    }
    else if (document.getElementById('ratike').checked){
        mokepon.innerHTML = 'Ratike'
    }

    if (mokepon.innerHTML != ""){
        alert("You choose " + mokepon.innerHTML + ".")
        selectEnemysmokepon()
        document.getElementById('select-mokepon').style.display = 'none'
        document.getElementById('select-attack').style.display = 'flex'
    }
    else{
        alert("You haven't choose a mokepon.")
    }
}

function randomNum(min, max){ // returns a value between min and max
    return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a decimal number between 0 and 1.
}

function selectEnemysmokepon(){
    let mokepons = document.getElementById('enemys-mokepon')
    let opt = randomNum(1, 3)
    
    switch(opt){
        case 1: mokepons.innerHTML = 'Hipodoge'
            break
        case 2: mokepons.innerHTML = 'Capipe'
            break
        case 3: mokepons.innerHTML = 'Ratike'
            break
    }

    alert("Enemy's mokepon is " + mokepons.innerHTML)
}

function waterAttack(){
    playersAttack = 'water'
    selectEnemysAttack()
}

function fireAttack(){
    playersAttack = 'fire'
    selectEnemysAttack()
}

function groundAttack(){
   playersAttack = 'ground'
   selectEnemysAttack() 
}

function selectEnemysAttack(){
    let opt = randomNum(1, 3)

    switch(opt){
        case 1: enemysAttack = 'water'
            break
        case 2: enemysAttack = 'fire'
            break
        default: enemysAttack = 'ground' // I set default instead of 'case 3' because 'ground' is the only left value that 'enemysAttack' can take
            break
    }
    battle()
}

function battle(){
    lives()
    
    if((enemysLives.innerHTML > 0) && (playersLives.innerHTML > 0)){
        roundWinner()
        createMessage()
    }
    
    if(enemysLives.innerHTML <= 0){
        battleResult("Congrulations! You win. You're the champion!")
    }
    else if(playersLives.innerHTML <= 0){
        battleResult('You lost the battle, but not the war. Keep going')
    }
}

function lives(){
    playersLives = document.getElementById('players-lives')
    enemysLives = document.getElementById('enemys-lives')
}

function createMessage(){ 
    let sectionMessages = document.getElementById('messages')
    
    let playersMokepon = document.getElementById('players-mokepon').innerHTML
    let enemysMokepon = document.getElementById('enemys-mokepon').innerHTML

    let paragraph = document.createElement('p')
    paragraph.innerHTML = "Your mokepon, " + playersMokepon + ", attacked with " + playersAttack + ". Your enemy's mokepon, " + enemysMokepon + ", attacked with " + enemysAttack + ". " + winnerMessage + '.'

    sectionMessages.appendChild(paragraph)
}

function roundWinner(){
    winnerMessage = 'You win'

    if(playersAttack == enemysAttack){
        winnerMessage = 'Draw'
    }
    else if((playersAttack == 'water') && (enemysAttack == 'fire')){
        enemysLives.innerHTML -= 1
    }
    else if((playersAttack == 'fire') && (enemysAttack == 'ground')){
        enemysLives.innerHTML -= 1
    } 
    else if((playersAttack == 'ground') && (enemysAttack == 'water')){
        enemysLives.innerHTML -= 1
    }
    else{
        winnerMessage = "You loost"
        playersLives.innerHTML -= 1
    }
}

function battleResult(result){
    let sectionMessages = document.getElementById('messages')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = result

    sectionMessages.appendChild(paragraph)

    disableAttackButtons()
    document.getElementById('btn-restart').style.display = 'block'
}

function disableAttackButtons(){
    document.getElementById('btn-fire').disabled = true
    document.getElementById('btn-water').disabled = true
    document.getElementById('btn-ground').disabled = true
}

function restartGame(){
    location.reload()
}

window.addEventListener('load', startGame)
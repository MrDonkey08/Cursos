const restartBtn = document.getElementById('btn-restart') // we set the variables with const so their value can't be changed
const selectAttack = document.getElementById('select-attack')
const battleSection = document.getElementById('battle')
const messages = document.getElementById('messages')

const mokeponBtn = document.getElementById('btn-mokepon')
const fireBtn = document.getElementById('btn-fire')
const waterBtn = document.getElementById('btn-water')
const groundBtn = document.getElementById('btn-ground')

const playersMokepon = document.getElementById('players-mokepon')
const inputAcynonyx = document.getElementById('acynonyx')
const inputPiwith = document.getElementById('piwith')
const inputBerry = document.getElementById('berry')

const selectMokepon = document.getElementById('select-mokepon')
const enemysMokepon = document.getElementById('enemys-mokepon')

let playersAttack // it doesn't belong to a function so it's a global variable and can be accessed anywhere in this file
let enemysAttack
let winnerMessage
const playersLives = document.getElementById('players-lives')
const enemysLives = document.getElementById('enemys-lives')

const playersCard = document.getElementById('players-card')
const resultCard = document.getElementById('result-card')
const enemysCard = document.getElementById('enemys-card')

class mokepon{ // we set a prototype (class in other languages) with class
	constructor(name, image, live){ 
		this.name = name
		this.image = image
		this.live = live
		this.attacks = []
	}
}

let acynonyx = new mokepon('Acynonyx', './assets/Acynonyx.png', 5)
let piwith = new mokepon('Piwith', './assets/Piwith.png', 5)
let berry = new mokepon('Berry', './assets/Berry.png', 5)

acynonyx.attacks.push(
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
)

piwith.attacks.push(
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
)

berry.attacks.push(
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
)

function startGame(){
	selectAttack.style.display = 'none'
	restartBtn.style.display = 'none'
	battleSection.style.display = 'none'
	messages.style.display = 'none'

	restartBtn.addEventListener('click', restartGame)
	mokeponBtn.addEventListener('click', selectmokepons)

	fireBtn.addEventListener('click', fireAttack)
	waterBtn.addEventListener('click', waterAttack)
	groundBtn.addEventListener('click', groundAttack)
}

function selectmokepons(){
	if (inputAcynonyx.checked){ // .checked returns true if the element is selected
		playersMokepon.innerHTML = 'Acynonyx'
	}
	else if (inputPiwith.checked){
		playersMokepon.innerHTML = 'Piwith'
	}
	else if (inputBerry.checked){
		playersMokepon.innerHTML = 'Berry'
	}

	if (playersMokepon.innerHTML != ""){
		alert("You choose " + playersMokepon.innerHTML + ".")
		selectEnemysMokepon()
		selectMokepon.style.display = 'none'
		selectAttack.style.display = 'flex'
		battleSection.style.display= 'flex'
	}
	else{
		alert("You haven't choose a mokepon.")
	}
}

function randomNum(min, max){ // returns a value between min and max
	return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a decimal number between 0 and 1.
}

function selectEnemysMokepon(){
	let opt = randomNum(1, 3)
	
	switch(opt){
		case 1: enemysMokepon.innerHTML = 'Acynonyx'
			break
		case 2: enemysMokepon.innerHTML = 'Piwith'
			break
		case 3: enemysMokepon.innerHTML = 'Berry'
			break
	}
	alert("Enemy's mokepon is " + enemysMokepon.innerHTML)
}

function waterAttack(){
	playersAttack = 'Water'
	selectEnemysAttack()
}

function fireAttack(){
	playersAttack = 'Fire'
	selectEnemysAttack()
}

function groundAttack(){
   playersAttack = 'Ground'
   selectEnemysAttack() 
}

function selectEnemysAttack(){
	let opt = randomNum(1, 3)

	switch(opt){
		case 1: enemysAttack = 'Water'
			break
		case 2: enemysAttack = 'Fire'
			break
		default: enemysAttack = 'Ground' // I set default instead of 'case 3' because 'Ground' is the only left value that 'enemysAttack' can take
			break
	}
	battle()
}

function battle(){
	
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

function createMessage(){ 
	let playersAttackP = document.createElement('p')
	let battleMessageP = document.createElement('p')
	let enemysAttackP = document.createElement('p')

	playersAttackP.innerHTML = playersAttack
	battleMessageP.innerHTML = winnerMessage
	enemysAttackP.innerHTML = enemysAttack

	playersCard.appendChild(playersAttackP)
	resultCard.appendChild(battleMessageP)
	enemysCard.appendChild(enemysAttackP)
}

function roundWinner(){
	winnerMessage = 'Win'

	if(playersAttack == enemysAttack){
		winnerMessage = 'Draw'
	}
	else if((playersAttack == 'Water') && (enemysAttack == 'Fire')){
		enemysLives.innerHTML -= 1
	}
	else if((playersAttack == 'Fire') && (enemysAttack == 'Ground')){
		enemysLives.innerHTML -= 1
	} 
	else if((playersAttack == 'Ground') && (enemysAttack == 'Water')){
		enemysLives.innerHTML -= 1
	}
	else{
		winnerMessage = "Defeat"
		playersLives.innerHTML -= 1
	}
}

function battleResult(result){
	let paragraph = document.createElement('p')
	paragraph.innerHTML = result

	messages.appendChild(paragraph)

	disableAttackButtons()
	messages.style.display = 'flex'
	restartBtn.style.display = 'block'
}

function disableAttackButtons(){
	fireBtn.disabled = true
	waterBtn.disabled = true
	groundBtn.disabled = true
}

function restartGame(){
	location.reload()
}

window.addEventListener('load', startGame)
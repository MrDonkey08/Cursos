const restartBtn = document.getElementById('btn-restart') // we set the variables with const so their value can't be changed
const selectAttack = document.getElementById('select-attack')
const battleSection = document.getElementById('battle')
const messages = document.getElementById('messages')

const mokeponBtn = document.getElementById('btn-mokepon')
const fireBtn = document.getElementById('btn-fire')
const waterBtn = document.getElementById('btn-water')
const groundBtn = document.getElementById('btn-ground')

const playersMokepon = document.getElementById('players-mokepon')

const selectMokepon = document.getElementById('select-mokepon')
const enemysMokepon = document.getElementById('enemys-mokepon')

const playersLives = document.getElementById('players-lives')
const enemysLives = document.getElementById('enemys-lives')

const playersCard = document.getElementById('players-card')
const resultCard = document.getElementById('result-card')
const enemysCard = document.getElementById('enemys-card')

const cardsBox = document.getElementById('cards-box')

let mokepons = []
let playersAttack // it doesn't belong to a function so it's a global variable and can be accessed anywhere in this file
let enemysAttack
let winnerMessage
let inputAcinonyx
let inputPiwith
let inputBerry

class mokepon{ // we set a prototype (class in other languages) with class
	constructor(name, image, live){ 
		this.name = name
		this.image = image
		this.live = live
		this.attacks = []
	}
}

// Objects
const acinonyx = new mokepon('Acinonyx', './assets/Acinonyx.png', 5)
const piwith = new mokepon('Piwith', './assets/Piwith.png', 5)
const berry = new mokepon('Berry', './assets/Berry.png', 5)

acinonyx.attacks.push(
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

mokepons.push(acinonyx, piwith, berry)

function startGame(){
	mokepons.forEach((mokepon) =>{
		cardsBox.innerHTML +=`
			<input type="radio" name="mokepon" id=${mokepon.name} />
			<label class="mokepon-card" for=${mokepon.name} id=${mokepon.name}-card>
				<p class="mokepon-name">${mokepon.name}</p>
				<img src=${mokepon.image} alt=${mokepon.name}>
			</label> 
				`
	})

	inputAcinonyx = document.getElementById('Acinonyx')
	inputPiwith = document.getElementById('Piwith')
	inputBerry = document.getElementById('Berry')

	selectAttack.style.display = 'none'
	restartBtn.style.display = 'none'
	battleSection.style.display = 'none'
	messages.style.display = 'none'

	restartBtn.addEventListener('click', restartGame)
	mokeponBtn.addEventListener('click', selectMokepons)

	fireBtn.addEventListener('click', fireAttack)
	waterBtn.addEventListener('click', waterAttack)
	groundBtn.addEventListener('click', groundAttack)
}

function selectMokepons(){
	if (inputAcinonyx.checked){ // .checked returns true if the element is selected
		playersMokepon.innerHTML = inputAcinonyx.id
	}
	else if (inputPiwith.checked){
		playersMokepon.innerHTML = inputPiwith.id
	}
	else if (inputBerry.checked){
		playersMokepon.innerHTML = inputBerry.id
	}

	if (playersMokepon.innerHTML != ""){
		alert("You choose " + playersMokepon.innerHTML)
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
	let opt = randomNum(0, mokepons.length - 1)

	enemysMokepon.innerHTML = mokepons[opt].name
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
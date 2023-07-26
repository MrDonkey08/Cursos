const restartBtn = document.getElementById('btn-restart') // we set the variables with const so their value can't be changed
const selectAttack = document.getElementById('select-attack')
const battleSection = document.getElementById('battle')
const messages = document.getElementById('messages')

const mokeponBtn = document.getElementById('btn-mokepon')
const attackBtns = document.getElementById('attack-buttons')

const playersMokepon = document.getElementById('players-mokepon')

const selectMokepon = document.getElementById('select-mokepon')
const enemysMokepon = document.getElementById('enemys-mokepon')

const victoriesTxt = document.getElementById('players-wins')
const defeatsTxt = document.getElementById('enemys-wins')

const playersCard = document.getElementById('players-card')
const resultCard = document.getElementById('result-card')
const enemysCard = document.getElementById('enemys-card')

const cardsBox = document.getElementById('cards-box')

const sectionSeeMap = document.getElementById('see-map')
const map = document.getElementById('map')

let i = 0
let mokepons = []
let pMokepon
let playersMokeponObject
let playersAttack = []
let enemysAttack = []
let enemysAttacks
let victories = 0
let defeats = 0
let winnerMessage
let inputAcinonyx
let inputPiwith
let inputBerry
let fireBtn
let waterBtn
let groundBtn
let btns = []
let lienzo = map.getContext("2d")
let interval
let mapBackground = new Image()
mapBackground.src = './assets/mokemap.png'

class mokepon{ // we set a prototype (class in other languages) with class
	constructor(name, image, live, x = 10, y = 10){ 
		this.name = name
		this.image = image
		this.live = live
		this.attacks = []
		
		this.x = x // x-axis
		this.y = y // y-axis
		this.w = 80 // width
		this.h = 80 // height
		
		this.mapImage = new Image()
		this.mapImage.src = image
		
		this.velX = 0
		this.velY = 0

		this.right = this.x + this.w
		this.left = this.x
		this.top = this.y
		this.bottom = this.y + this.h
	}
	drawMokepon(){
		lienzo.drawImage( //.fillRect creates a Rectangle; the 1st parameter is x-axis, the 2nd is the y-axis, 3rd width and 4th height
		this.mapImage,
		this.x, 
		this.y, 
		this.w, 
		this.h
		)
	}
	setSides(){
		this.right = this.x + this.w
		this.left = this.x
		this.top = this.y
		this.bottom = this.y + this.h
	}
}

// Objects
const acinonyx = new mokepon('Acinonyx', './assets/Acinonyx.png', 5)
const piwith = new mokepon('Piwith', './assets/Piwith.png', 5)
const berry = new mokepon('Berry', './assets/Berry.png', 5)

const  acinonyxEnemy = new mokepon('Acinonyx', './assets/Acinonyx.png', 5, 40, 115)
const  piwithEnemy = new mokepon('Piwith', './assets/Piwith.png', 5, 220, 270)
const  berryEnemy = new mokepon('Berry', './assets/Berry.png', 5, 520, 165)


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

	sectionSeeMap.style.display = 'none'
	selectAttack.style.display = 'none'
	restartBtn.style.display = 'none'
	battleSection.style.display = 'none'
	messages.style.display = 'none'

	restartBtn.addEventListener('click', restartGame)
	mokeponBtn.addEventListener('click', selectMokepons)
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
		playersMokeponObject = pMokeponObject()
		selectEnemysMokepon()
		mokeponAttacks()
		startMap()
		selectMokepon.style.display = 'none'
		sectionSeeMap.style.display = 'flex'
		//selectAttack.style.display = 'flex'
		//battleSection.style.display= 'flex'
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
	enemysAttacks = mokepons[opt].attacks

	alert("Enemy's mokepon is " + enemysMokepon.innerHTML)
}

function mokeponAttacks(){
	let attacks
	
	for (let i = 0; i < mokepons.length; i++){
		if (playersMokepon.innerHTML === mokepons[i].name){
			attacks = mokepons[i].attacks
		} 
	}
	showAttacks(attacks)
	attackSequence()
}

function showAttacks(attacks){
	attacks.forEach((attack) =>{ // the parameter 'attack' is the name we can stablish to make reference to each element of the 'attacks' array. We can actually replace 'attack' with any word
		attackBtns.innerHTML +=`
		<button id=${attack.id} class='attack-btns'>${attack.name}</button>
		`
	})

	fireBtn = document.getElementById('fire-btn')
	waterBtn = document.getElementById('water-btn')
	groundBtn = document.getElementById('ground-btn')
	btns = document.querySelectorAll('.attack-btns')
}

function attackSequence(){
	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			switch(e.target.textContent){
				case '🔥': playersAttack.push('Fire'); break
				case '💧': playersAttack.push('Water'); break
				default: playersAttack.push('Ground'); break
			}
			btn.style.background = '#112f58'
			selectEnemysAttack()
		})
	})
}

function selectEnemysAttack(){
	let opt = randomNum(0, enemysAttacks.length - 1)

	switch(opt){
		case 0: case 1: enemysAttack.push('Water'); break
		case 3:	case 4: enemysAttack.push('Fire'); break
		default: enemysAttack.push('Ground'); break // I set default instead of 'case 3' because 'Ground' is the only left value that 'enemysAttack' can take
	}
	battle()
}

function battle(){
	if(i < 4){
		roundWinner()
		createMessage(i)
		i++
	}
	else{
		if(victories > defeats){
			battleResult("Congrulations! You win. You're the champion!")
		}
		else if(victories < defeats){
			battleResult('You lost the battle, but not the war. Keep going.')
		}
		else{
			battleResult("Awesome! It's a draw. Let's try again.")
		}
	}
}

function createMessage(i){ 
	let playersAttackP = document.createElement('p')
	let battleMessageP = document.createElement('p')
	let enemysAttackP = document.createElement('p')

	playersAttackP.innerHTML = playersAttack[i]
	battleMessageP.innerHTML = winnerMessage
	enemysAttackP.innerHTML = enemysAttack[i]

	playersCard.appendChild(playersAttackP)
	resultCard.appendChild(battleMessageP)
	enemysCard.appendChild(enemysAttackP)
}

function roundWinner(){
	switch(true){
		case playersAttack[i] === enemysAttack[i]:
			winnerMessage = 'Draw' 
			break
		case playersAttack[i] === 'Water' && enemysAttack[i] === 'Fire':
		case playersAttack[i] === 'Fire' && enemysAttack[i] === 'Ground':
		case playersAttack[i] === 'Ground' && enemysAttack[i] === 'Water':
			winnerMessage = 'Win'
			victories += 1
			victoriesTxt.innerHTML = victories
			break
		default:
			winnerMessage = "Defeat"
			defeats += 1
			defeatsTxt.innerHTML = defeats
			break
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

function pMokeponObject(){
	for (i = 0; i < mokepons.length; i++) {
		if (playersMokepon.innerHTML === mokepons[i].name){
			return mokepons[i]
		}
	}
}

function startMap(){
	map.width = 600
	map.height = 400
	interval = setInterval(drawCanvas, 50)
	window.addEventListener('keydown', keyPressed)
	window.addEventListener('keyup', stopMovement)
}

function drawCanvas(){
	playersMokeponObject.x += playersMokeponObject.velX
	playersMokeponObject.y += playersMokeponObject.velY
	lienzo.clearRect(0, 0, map.width, map.height)
	lienzo.drawImage(mapBackground,
		0,
		0,
		map.width,
		map.height
		)
		playersMokeponObject.drawMokepon()
		acinonyxEnemy.drawMokepon()
		piwithEnemy.drawMokepon()
		berryEnemy.drawMokepon()
	if(playersMokeponObject.velX !== 0 || playersMokeponObject.velY !== 0){
		checkColision(acinonyxEnemy)
		checkColision(piwithEnemy)
		checkColision(berryEnemy)
	}
}

function moveUp(){
	playersMokeponObject.velY = -5
}

function moveLeft(){
	playersMokeponObject.velX = -5
}

function moveDown(){
	playersMokeponObject.velY = 5
}

function moveRight(){
	playersMokeponObject.velX = 5
}

function stopMovement(){
	playersMokeponObject.velX = 0
	playersMokeponObject.velY = 0
}

function keyPressed(event){ 
	switch (event.key) {
		case 'ArrowUp': moveUp()
			break
		case 'ArrowDown': moveDown()
			break
		case 'ArrowLeft': moveLeft()
			break
		case 'ArrowRight': moveRight()
			break
		default:
			break;
	}
}

function checkColision(enemy){
	playersMokeponObject.setSides()
	if(
		playersMokeponObject.top > enemy.bottom ||
		playersMokeponObject.bottom < enemy.top ||
		playersMokeponObject.left > enemy.right ||
		playersMokeponObject.right < enemy.left
	){
		return
	}
	console.log("Hay colisión con " + enemy.name)
}

window.addEventListener('load', startGame)
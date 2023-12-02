const restartBtn = document.getElementById('btn-restart') // we set the variables with const so their value can't be changed
const selectAttack = document.getElementById('select-attack')
const battleSection = document.getElementById('battle')
const messages = document.getElementById('messages')

const dinoBtn = document.getElementById('btn-dino')
const attackBtns = document.getElementById('attack-buttons')

const playersDino = document.getElementById('players-dino')

const selectDino = document.getElementById('select-dino')
const enemysDino = document.getElementById('enemys-dino')

const victoriesTxt = document.getElementById('players-wins')
const defeatsTxt = document.getElementById('enemys-wins')

const playersCard = document.getElementById('players-card')
const resultCard = document.getElementById('result-card')
const enemysCard = document.getElementById('enemys-card')

const cardsBox = document.getElementById('cards-box')

const sectionSeeMap = document.getElementById('see-map')
const map = document.getElementById('map')
const mapMaxWidth = 800
const mapMaxHeight = 600

let playerId = null
let enemyId = null
let dinos = []
let enemiesDinos = []
let pDino
let pDinoObj
let playersAttack = []
let enemysAttack = []
let enemysAttacks
let victories = 0
let defeats = 0
let winnerMessage
let inputChefsaurio
let inputBomberosaurio
let inputObrerosaurio
let inputElectromecanicosaurio
let inputElectrosaurio
let inputDoctorsaurio
let inputPilotosaurio
let fireBtn
let waterBtn
let groundBtn
let metalBtn
let electricityBtn
let poisonBtn
let windBtn

let btns = []
let lienzo = map.getContext("2d")
let interval
let mapBackground = new Image()
mapBackground.src = './assets/map.jpeg'

let sizeScale = 1

if(window.innerWidth < mapMaxWidth){
	sizeScale = (window.innerWidth - 50) / mapMaxWidth
}

map.width = mapMaxWidth * sizeScale

map.height = mapMaxHeight * sizeScale

class dino{ // we set a prototype (class in other languages) with class
	constructor(name, image, w, h, id = null){
		this.id = id 
		this.name = name
		this.image = image
		this.attacks = []
		
		this.h = 90 * sizeScale // height
		this.w = this.h * w / h  // width
		this.x = randomNum(0, mapMaxWidth - this.w) // x-axis
		this.y = randomNum(0, mapMaxHeight - this.h) // y-axis
		
		this.mapImage = new Image()
		this.mapImage.src = image
		
		this.velX = 0
		this.velY = 0

		this.right = this.x + this.w
		this.left = this.x
		this.top = this.y
		this.bottom = this.y + this.h
	}
	drawDino(){
		lienzo.drawImage( //.fillRect creates a Rectangle; the 1st parameter is x-axis, the 2nd is the y-axis, 3rd width and 4th height
		this.mapImage,
		this.x * sizeScale, 
		this.y * sizeScale, 
		this.w, 
		this.h
		)
	}
}

// Objects
const chefsaurioAttacks = [
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '☣️', id: 'poison-btn'},
	{ name: '☣️', id: 'poison-btn'},
	{ name: '🔩', id: 'metal-btn'},
]

const bomberosaurioAttacks = [
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌪️', id: 'wind-btn'},
	{ name: '🌪️', id: 'wind-btn'},
	{ name: '🔩', id: 'metal-btn'},
]

const obrerosaurioAttacks = [
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '⚡', id: 'electricity-btn'}
]

const electromecanicosaurioAttacks = [
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '⚡', id: 'electricity-btn'},
	{ name: '⚡', id: 'electricity-btn'},
	{ name: '🔥', id: 'fire-btn'},
]

const doctorsaurioAttacks = [
	{ name: '☣️', id: 'poison-btn'},
	{ name: '☣️', id: 'poison-btn'},
	{ name: '☣️', id: 'poison-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
]

const electrosaurioAttacks = [
	{ name: '⚡', id: 'electricity-btn'},
	{ name: '⚡', id: 'electricity-btn'},
	{ name: '⚡', id: 'electricity-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🌱', id: 'ground-btn'},
]

const pilotosaurioAttacks = [
	{ name: '🌪️', id: 'wind-btn'},
	{ name: '🌪️', id: 'wind-btn'},
	{ name: '🌪️', id: 'wind-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🔩', id: 'metal-btn'},
	{ name: '🔥', id: 'fire-btn'},
]

const chefsaurio = new dino('Chefsaurio', './assets/Chefsaurio.png', 505, 639)
const bomberosaurio = new dino('Bomberosaurio', './assets/Bomberosaurio.png', 252, 489)
const obrerosaurio = new dino('Obrerosaurio', './assets/Obrerosaurio.png', 788, 1000)
const electromecanicosaurio = new dino('Electromecanicosaurio', './assets/Electromecanicosaurio.png', 309,442)
const electrosaurio = new dino('Electrosaurio', './assets/Electrosaurio.png', 243, 227)
const doctorsaurio = new dino('Doctorsaurio', './assets/Doctorsaurio.png', 527, 634)
const pilotosaurio = new dino('Pilotosaurio', './assets/Pilotosaurio.png', 591, 619)

chefsaurio.attacks.push(...chefsaurioAttacks)
bomberosaurio.attacks.push(...bomberosaurioAttacks)
obrerosaurio.attacks.push(...obrerosaurioAttacks)
electromecanicosaurio.attacks.push(...electromecanicosaurioAttacks)
electrosaurio.attacks.push(...electrosaurioAttacks)
doctorsaurio.attacks.push(...doctorsaurioAttacks)
pilotosaurio.attacks.push(...pilotosaurioAttacks)


dinos.push(chefsaurio, bomberosaurio, obrerosaurio, electromecanicosaurio, electrosaurio, doctorsaurio, pilotosaurio)

function startGame(){
	dinos.forEach((dino) =>{
		cardsBox.innerHTML +=`
			<input type="radio" name="dino" id=${dino.name} />
			<label class="dino-card" for=${dino.name} id=${dino.name}-card>
				<p class="dino-name">${dino.name}</p>
				<img src=${dino.image} alt=${dino.name}>
			</label> 
				`
	})

	inputChefsaurio = document.getElementById('Chefsaurio')
	inputBomberosaurio = document.getElementById('Bomberosaurio')
	inputObrerosaurio = document.getElementById('Obrerosaurio')
	inputElectromecanicosaurio = document.getElementById('Electromecanicosaurio')
	inputElectrosaurio = document.getElementById('Electrosaurio')
	inputDoctorsaurio = document.getElementById('Doctorsaurio')
	inputPilotosaurio = document.getElementById('Pilotosaurio')

	sectionSeeMap.style.display = 'none'
	selectAttack.style.display = 'none'
	restartBtn.style.display = 'none'
	battleSection.style.display = 'none'
	messages.style.display = 'none'

	restartBtn.addEventListener('click', restartGame)
	dinoBtn.addEventListener('click', selectDinos)

	joinGame()
}

function joinGame(){
	fetch("http://localhost:8080/join")
		.then(function(res){
			if(res.ok){
				res.text()
					.then(function(answer){
						playerId = answer
					})
			}
		})
}

function selectDinos(){
	if (inputChefsaurio.checked){ // .checked returns true if the element is selected
		pDino = inputChefsaurio.id
	}
	else if (inputBomberosaurio.checked){
		pDino = inputBomberosaurio.id
	}
	else if (inputObrerosaurio.checked){
		pDino = inputObrerosaurio.id
	}
	else if (inputElectromecanicosaurio.checked){
		pDino = inputElectromecanicosaurio.id
	}
	else if (inputElectrosaurio.checked){
		pDino = inputElectrosaurio.id
	}
	else if (inputDoctorsaurio.checked){
		pDino = inputDoctorsaurio.id
	}
	else if (inputPilotosaurio.checked){
		pDino = inputPilotosaurio.id
	}
	else{
		alert("You haven't choose a dino.")
		return
	}

		playersDino.innerHTML = pDino
		selectedDino()

		alert("You choose " + pDino)
		pDinoObj = pDinoObject()
		dinoAttacks()
		startMap()
		selectDino.style.display = 'none'
		sectionSeeMap.style.display = 'flex'
}

function selectedDino(){
	fetch(`http://localhost:8080/dino/${playerId}`, {
		method: "post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			dino: pDino
		})
	})
}

function randomNum(min, max){ // returns a value between min and max
	return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a decimal number between 0 and 1.
}

function selectEnemysDino(enemy){
	enemysDino.innerHTML = enemy.name
	enemysAttacks = enemy.attacks
}

function dinoAttacks(){
	let attacks
	
	for (let i = 0; i < dinos.length; i++){
		if (pDino === dinos[i].name){
			attacks = dinos[i].attacks
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
	metalBtn = document.getElementById('metal-btn')
	electricityBtn = document.getElementById('electricity-btn')
	poisonBtn = document.getElementById('poison-btn')
	windBtn = document.getElementById('wind-btn')

	btns = document.querySelectorAll('.attack-btns')
}

function attackSequence(){
	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			switch(e.target.textContent){
				case '🔥': playersAttack.push('Fire'); break
				case '💧': playersAttack.push('Water'); break
				case '🔩': playersAttack.push('Metal'); break
				case '⚡': playersAttack.push('Electricity'); break
				case '☣️': playersAttack.push('Poison'); break
				case '🌪️': playersAttack.push('Wind'); break
				default: playersAttack.push('Ground'); break
			}
			btn.style.background = '#8051b6'
			btn.disabled = true
			console.log(playersAttack.length)
			if(playersAttack.length === 6){
				sendAttacks()
			}
		})
	})
}

function sendAttacks(){
	fetch(`http://localhost:8080/dino/${playerId}/attacks`, {
		method: "post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			attacks: playersAttack
		})
	})

	interval = setInterval(getAttacks, 50)
}

function getAttacks(){
	fetch(`http://localhost:8080/dino/${enemyId}/attacks`)
		.then(function (res){
			if(res.ok){
				res.json()
				.then(function({ attacks }){
					if(attacks.length === 6){
						enemysAttack = attacks
						battle()
					}
				})
			}
		})
}

function battle(){
	clearInterval(interval)
	for (i = 0; i < 5; i++) {
		roundWinner(i)
		createMessage(i)
	}

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

function roundWinner(i){
	switch(playersAttack[i]){
		case enemysAttack[i]:
			draw()
			break
		case 'Water':
			switch(enemysAttack[i]){
				case 'Fire':
				case 'Wind':
					victory(); break
				case 'Wind':
				case 'Metal':
					draw(); break
				default: defeat(); break
			}
			break
		case 'Fire':
			switch(enemysAttack[i]){
				case 'Wind':
				case 'Metal':
					victory(); break
				case 'Electricity':
				case 'Poison':
					draw(); break
				default: defeat(); break
			}
		case 'Ground':
			switch(enemysAttack[i]){
				case 'Fire':
				case 'Electricity':
					victory(); break
				case 'Metal':
				case 'Ground':
					draw(); break
				default: defeat(); break
			}
			break
		case 'Metal':
			switch(enemysAttack[i]){
				case 'Poison':
				case 'Wind':
					victory(); break
				case 'Water':
				case 'Ground':
					draw(); break
				default: defeat(); break
			}
			break
		case 'Electricity':
			switch(enemysAttack[i]){
				case 'Water':
				case 'Metal':
				case 'Wind':
					victory(); break
				case 'Fire':
				case 'Poison':
					draw(); break
				default: defeat(); break
			}
			break
		case 'Poison':
			switch(enemysAttack[i]){
				case 'Water':
				case 'Ground':
					victory(); break
				case 'Metal':
				case 'Electricity':
					draw(); break
				default: defeat(); break
			}
			break
		case 'Wind':
			switch(enemysAttack[i]){
				case 'Metal':
				case 'Electricity':
					victory(); break
				case 'Ground':
				case 'Poison':
					draw(); break
				default: defeat(); break
			}
			break
	}
}

function victory(){
	winnerMessage = 'Win'
	victories += 1
	victoriesTxt.innerHTML = victories
}

function defeat(){
	winnerMessage = "Defeat"
	defeats += 1
	defeatsTxt.innerHTML = defeats
}

function draw(){
	winnerMessage = 'Draw' 
}

function battleResult(result){
	let paragraph = document.createElement('p')
	paragraph.innerHTML = result

	messages.appendChild(paragraph)

	messages.style.display = 'flex'
	restartBtn.style.display = 'block'
}

function restartGame(){
	location.reload()
}

function pDinoObject(){
	for (i = 0; i < dinos.length; i++) {
		if (pDino === dinos[i].name){
			return dinos[i]
		}
	}
}

function startMap(){
	interval = setInterval(drawCanvas, 30)
	window.addEventListener('keydown', keyPressed)
	window.addEventListener('keyup', stopMovement)
}

function drawCanvas(){
	pDinoObj.x += pDinoObj.velX
	pDinoObj.y += pDinoObj.velY
	lienzo.clearRect(0, 0, map.width, map.height)
	lienzo.drawImage(mapBackground,
		0,
		0,
		map.width,
		map.height
	)
	pDinoObj.drawDino()

	sendPosition(pDinoObj.x, pDinoObj.y)

	enemiesDinos.forEach(function (dino){
		dino.drawDino()
		checkColision(dino)
	})
}

function sendPosition(x, y){
	fetch(`http://localhost:8080/dino/${playerId}/position`, {
		method: "post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			x, // when the code and the value are the same we can just write the value; so x it's equal to x: x
			y
		})
	})
	.then(function (res){
		if(res.ok){
			res.json()
				.then(function( {enemies }){
					enemiesDinos = enemies.map(function (enemy){
						const dinoName = enemy.dino.name
						let enemyDino = null

						switch(dinoName){
							case "Chefsaurio":
								enemyDino = new dino('Chefsaurio', './assets/Chefsaurio.png', 505, 639, enemy.id)
								break
							case "Bomberosaurio":
								enemyDino = new dino('Bomberosaurio', './assets/Bomberosaurio.png', 252, 489, enemy.id)
								break 
							case "Obrerosaurio":
								enemyDino = new dino('Obrerosaurio', './assets/Obrerosaurio.png', 788, 1000, enemy.id)
								break
							case "Electromecanicosaurio":
								enemyDino = new dino('Electromecanicosaurio', './assets/Electromecanicosaurio.png', 309,442, enemy.id)
								break
							case "Electrosaurio":
								enemyDino = new dino('Electrosaurio', './assets/Electrosaurio.png', 243, 227, enemy.id)
								break
							case "Doctorsaurio":
								enemyDino = new dino('Doctorsaurio', './assets/Doctorsaurio.png', 527, 634, enemy.id)
								break
							case "Pilotosaurio":
								enemyDino = new dino('Pilotosaurio', './assets/Pilotosaurio.png', 591, 619, enemy.id)
								break
						}
						
						enemyDino.x = enemy.x || 0
						enemyDino.y = enemy.y || 0

						return enemyDino
					})
				})
		}
	})
}

function moveUp(){
	pDinoObj.velY = -5 * sizeScale
}

function moveLeft(){
	pDinoObj.velX = -5 * sizeScale
}

function moveDown(){
	pDinoObj.velY = 5 * sizeScale
}

function moveRight(){
	pDinoObj.velX = 5 * sizeScale
}

function stopMovement(){
	pDinoObj.velX = pDinoObj.velY = 0
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
	const upEnemy = enemy.y
	const downEnemy = enemy.y + enemy.h
	const rightEnemy = enemy.x + enemy.w
	const leftEnemy = enemy.x

	const upDino = pDinoObj.y
	const downDino = pDinoObj.y + pDinoObj.h
	const rightDino = pDinoObj.x + pDinoObj.w
	const leftDino = pDinoObj.x

	if(
		downDino < upEnemy ||
		upDino > downEnemy ||
		rightDino < leftEnemy ||
		leftDino > rightEnemy
	) {
		return
	}
	clearInterval(interval)
	enemyId = enemy.id
	sectionSeeMap.style.display = 'none'
	selectAttack.style.display = 'flex'
	battleSection.style.display= 'flex'
	selectEnemysDino(enemy)
	window.removeEventListener('keydown', keyPressed)
	window.removeEventListener('keyup', stopMovement)
}

window.addEventListener('load', startGame)
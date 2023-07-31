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
const mapMaxWidth = 800
const mapMaxHeight = 600

let playerId = null
let enemyId = null
let mokepons = []
let enemiesMokepons = []
let pMokepon
let pMokeponObj
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

let sizeScale = 1

if(window.innerWidth < mapMaxWidth){
	sizeScale = (window.innerWidth - 50) / mapMaxWidth
}

map.width = mapMaxWidth * sizeScale

map.height = mapMaxHeight * sizeScale

class mokepon{ // we set a prototype (class in other languages) with class
	constructor(name, image, mapPhoto, live, w, h, id = null){
		this.id = id 
		this.name = name
		this.image = image
		this.live = live
		this.mapPhoto = mapPhoto
		this.attacks = []
		
		this.h = 110 * sizeScale // height
		this.w = this.h * w / h  // width
		this.x = randomNum(0, map.width - this.w) // x-axis
		this.y = randomNum(0, map.height - this.h) // y-axis
		
		this.mapImage = new Image()
		this.mapImage.src = mapPhoto
		
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

const acinonyxAttacks = [
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
]

const piwithAttacks = [
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
]

const berryAttacks = [
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
	{ name: '🌱', id: 'ground-btn'},
]

const acinonyx = new mokepon('Acinonyx', './assets/Acinonyx.png', './assets/acinonyx-map.png', 5, 249, 290)
const piwith = new mokepon('Piwith', './assets/Piwith.png', './assets/piwith-map.png', 5, 146, 283)
const berry = new mokepon('Berry', './assets/Berry.png', './assets/berry-map.png', 5, 229, 238)

acinonyx.attacks.push(...acinonyxAttacks)
piwith.attacks.push(...piwithAttacks)
berry.attacks.push(...berryAttacks)

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
		pMokepon = playersMokepon.innerHTML
		selectedMokepon()


		alert("You choose " + playersMokepon.innerHTML)
		pMokeponObj = pMokeponObject()
		mokeponAttacks()
		startMap()
		selectMokepon.style.display = 'none'
		sectionSeeMap.style.display = 'flex'
	}
	else{
		alert("You haven't choose a mokepon.")
	}
}

function selectedMokepon(){
	fetch(`http://localhost:8080/mokepon/${playerId}`, {
		method: "post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			mokepon: pMokepon
		})
	})
}

function randomNum(min, max){ // returns a value between min and max
	return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a decimal number between 0 and 1.
}

function selectEnemysMokepon(enemy){
	enemysMokepon.innerHTML = enemy.name
	enemysAttacks = enemy.attacks
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
			btn.style.background = '#8051b6'
			btn.disabled = true
			if(playersAttack.length === 5){
				sendAttacks()
			}
		})
	})
}

function sendAttacks(){
	fetch(`http://localhost:8080/mokepon/${playerId}/attacks`, {
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
	fetch(`http://localhost:8080/mokepon/${enemyId}/attacks`)
		.then(function (res){
			if(res.ok){
				res.json()
				.then(function({ attacks }){
					if(attacks.length === 5){
						enemysAttack = attacks
						battle()
					}
				})
			}
		})
}

function battle(){
	clearInterval(interval)
	for (i = 0; i < 4; i++) {
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
	interval = setInterval(drawCanvas, 30)
	window.addEventListener('keydown', keyPressed)
	window.addEventListener('keyup', stopMovement)
}

function drawCanvas(){
	pMokeponObj.x += pMokeponObj.velX
	pMokeponObj.y += pMokeponObj.velY
	lienzo.clearRect(0, 0, map.width, map.height)
	lienzo.drawImage(mapBackground,
		0,
		0,
		map.width,
		map.height
	)
	pMokeponObj.drawMokepon()

	sendPosition(pMokeponObj.x, pMokeponObj.y)

	enemiesMokepons.forEach(function (mokepon){
		mokepon.drawMokepon()
		checkColision(mokepon)
	})
}

function sendPosition(x, y){
	fetch(`http://localhost:8080/mokepon/${playerId}/position`, {
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
					enemiesMokepons = enemies.map(function (enemy){
						const mokeponName = enemy.mokepon.name
						let enemyMokepon = null
						switch(mokeponName){
							case "Acinonyx":
								enemyMokepon = new mokepon('Acinonyx', './assets/Acinonyx.png', './assets/acinonyx-map.png', 5, 249, 290, enemy.id)
								break
							case "Piwith":
								enemyMokepon = new mokepon('Piwith', './assets/Piwith.png', './assets/piwith-map.png', 5, 146, 283, enemy.id)
								break 
							case "Berry":
								enemyMokepon = new mokepon('Berry', './assets/Berry.png', './assets/berry-map.png', 5, 229, 238, enemy.id)
								break
						}
						enemyMokepon.x = enemy.x
						enemyMokepon.y = enemy.y

						return enemyMokepon

					})
				})
		}
	})
}

function moveUp(){
	pMokeponObj.velY = -5 * sizeScale
}

function moveLeft(){
	pMokeponObj.velX = -5 * sizeScale
}

function moveDown(){
	pMokeponObj.velY = 5 * sizeScale
}

function moveRight(){
	pMokeponObj.velX = 5 * sizeScale
}

function stopMovement(){
	pMokeponObj.velX = pMokeponObj.velY = 0
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

	const upMokepon = pMokeponObj.y
	const downMokepon = pMokeponObj.y + pMokeponObj.h
	const rightMokepon = pMokeponObj.x + pMokeponObj.w
	const leftMokepon = pMokeponObj.x

	if(
		downMokepon < upEnemy ||
		upMokepon > downEnemy ||
		rightMokepon < leftEnemy ||
		leftMokepon > rightEnemy
	) {
		return
	}
	clearInterval(interval)
	enemyId = enemy.id
	sectionSeeMap.style.display = 'none'
	selectAttack.style.display = 'flex'
	battleSection.style.display= 'flex'
	selectEnemysMokepon(enemy)
	window.removeEventListener('keydown', keyPressed)
	window.removeEventListener('keyup', stopMovement)
}

window.addEventListener('load', startGame)
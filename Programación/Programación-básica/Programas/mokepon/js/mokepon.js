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

let cLeft = false
let cRight = false
let cUp = false
let cDown = false
let mokepons = []
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

let sizeScale = 1

if(window.innerWidth < mapMaxWidth){
	sizeScale = (window.innerWidth - 50) / mapMaxWidth
}

map.width = mapMaxWidth * sizeScale

map.height = mapMaxHeight * sizeScale

class mapElements{
	constructor(x, y, w, h){
		this.x = x * sizeScale // left
		this.y = y * sizeScale // top
		this.w = w * sizeScale
		this.h = h * sizeScale
	}
	setSides(){
		this.right = this.x + this.w
		this.left = this.x
		this.top = this.y
		this.bottom = this.y + this.h
	}
}

class mokepon extends mapElements{ // we set a prototype (class in other languages) with class
	constructor(name, image, mapPhoto, live, w, h, x, y){ 
		super(x, y, w, h)
		this.name = name
		this.image = image
		this.live = live
		this.mapPhoto = mapPhoto
		this.attacks = []
		
		this.h = 100 * sizeScale // height
		this.w = this.h * w / h  // width
		this.x = randomNum(0, map.width - this.w) // x-axis
		this.y = randomNum(0, map.height - this.h) // y-axis
		
		this.mapImage = new Image()
		this.mapImage.src = mapPhoto
		
		this.velX = 0
		this.velY = 0

		super.setSides()
	}
	draw(){
		lienzo.drawImage( //.fillRect creates a Rectangle; the 1st parameter is x-axis, the 2nd is the y-axis, 3rd width and 4th height
		this.mapImage,
		this.x, 
		this.y, 
		this.w, 
		this.h
		)
	}
}

class obstacle extends mapElements{
	constructor(x, y, w, h){
		super(x, y, w, h)
		super.setSides()
	}
	draw(){
		lienzo.strokeStyle = 'rgba(0, 0, 255, 10)' // Transparent blue stroke
		lienzo.strokeRect(
		 this.x,
		 this.y,
		 this.w,
		 this.h,
		)
	}
}

// Objects
const acinonyx = new mokepon('Acinonyx', './assets/Acinonyx.png', './assets/acinonyx-map.png', 5, 249, 290)
const piwith = new mokepon('Piwith', './assets/Piwith.png', './assets/piwith-map.png', 5, 146, 283)
const berry = new mokepon('Berry', './assets/Berry.png', './assets/berry-map.png', 5, 229, 238)

const acinonyxEnemy = new mokepon('Acinonyx', './assets/Acinonyx.png', './assets/acinonyx-map.png', 5, 249, 290)
const piwithEnemy = new mokepon('Piwith', './assets/Piwith.png', './assets/piwith-map.png', 5, 146, 283)
const berryEnemy = new mokepon('Berry', './assets/Berry.png', './assets/berry-map.png', 5, 229, 238)

const house = new obstacle(403, 35, 345, 137)
const pool = new obstacle(95, 389, 195, 210)
const fence1 = new obstacle(47, 0, 195, 30)
const fence2 = new obstacle(0, 395, 93, 254)
const fence3 = new obstacle(292, 528, 507, 71)
const mapObj = new obstacle(0, 0, map.width, map.height)

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

acinonyxEnemy.attacks.push(
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
)

piwithEnemy.attacks.push(
	{ name: '🔥', id: 'fire-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '💧', id: 'water-btn'},
	{ name: '🌱', id: 'ground-btn'},
)

berryEnemy.attacks.push(
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
		mokeponAttacks()
		startMap()
		selectMokepon.style.display = 'none'
		sectionSeeMap.style.display = 'flex'
	}
	else{
		alert("You haven't choose a mokepon.")
	}
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
	let used = playersAttack.length - 1
	if(used < 4){
		roundWinner(used)
		createMessage(used)
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

function createMessage(used){ 
	let playersAttackP = document.createElement('p')
	let battleMessageP = document.createElement('p')
	let enemysAttackP = document.createElement('p')

	playersAttackP.innerHTML = playersAttack[used]
	battleMessageP.innerHTML = winnerMessage
	enemysAttackP.innerHTML = enemysAttack[used]

	playersCard.appendChild(playersAttackP)
	resultCard.appendChild(battleMessageP)
	enemysCard.appendChild(enemysAttackP)
}

function roundWinner(used){
	switch(true){
		case playersAttack[used] === enemysAttack[used]:
			winnerMessage = 'Draw' 
			break
		case playersAttack[used] === 'Water' && enemysAttack[used] === 'Fire':
		case playersAttack[used] === 'Fire' && enemysAttack[used] === 'Ground':
		case playersAttack[used] === 'Ground' && enemysAttack[used] === 'Water':
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
	playersMokeponObject.x += playersMokeponObject.velX
	playersMokeponObject.y += playersMokeponObject.velY
	lienzo.clearRect(0, 0, map.width, map.height)
	lienzo.drawImage(mapBackground,
		0,
		0,
		map.width,
		map.height
		)
		playersMokeponObject.draw()
		acinonyxEnemy.draw()
		piwithEnemy.draw()
		berryEnemy.draw()
		house.draw()
		pool.draw()
		fence1.draw()
		fence2.draw()
		fence3.draw()
		mapObj.draw()
	if(playersMokeponObject.velX !== 0 || playersMokeponObject.velY !== 0){
		checkColision(acinonyxEnemy)
		checkColision(piwithEnemy)
		checkColision(berryEnemy)
		obstacleColision(house)
		obstacleColision(pool)
		obstacleColision(fence1)
		obstacleColision(fence2)
		obstacleColision(fence3)
	}
}

function moveUp(){
	if (cUp === false){
		playersMokeponObject.velY = -5 * sizeScale
	}
}

function moveLeft(){
	if (cLeft === false){
		playersMokeponObject.velX = -5 * sizeScale
	}
}

function moveDown(){
	if (cDown === false){
		playersMokeponObject.velY = 5 * sizeScale
	}
}

function moveRight(){
	if (cRight === false)
		playersMokeponObject.velX = 5 * sizeScale
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

function checkColision(element){
	playersMokeponObject.setSides()
	if(
		playersMokeponObject.top > element.bottom ||
		playersMokeponObject.bottom < element.top ||
		playersMokeponObject.left > element.right ||
		playersMokeponObject.right < element.left
	){
		return
	}
	if (element.name !== ""){
	}
}

function mokeponColision(){
	clearInterval(interval)
	sectionSeeMap.style.display = 'none'
	selectAttack.style.display = 'flex'
	battleSection.style.display= 'flex'
	selectEnemysMokepon(element)
	window.removeEventListener('keydown', keyPressed)
	window.removeEventListener('keyup', stopMovement)
}

function obstacleColision(obstacle){
	console.log(obstacle)
	switch(true){
		case obstacle.top < playersMokeponObject.bottom:
			cDown = true 
			break
		default: console.log("Ayuda")
			break
	}

}

window.addEventListener('load', startGame)
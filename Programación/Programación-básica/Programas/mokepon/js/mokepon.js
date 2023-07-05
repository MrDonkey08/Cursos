let playersAttack // it doesn't belong to a function so it's a global variable and can be accessed anywhere in this file
let enemysAttack
let winnerMessage
let playersLives
let enemysLives

function startGame(){
	document.getElementById('select-attack').style.display = 'none'
	document.getElementById('btn-restart').style.display = 'none'
	document.getElementById('battle').style.display = 'none'
	document.getElementById('messages').style.display = 'none'

	document.getElementById('btn-restart').addEventListener('click', restartGame)
	document.getElementById('btn-mokepon').addEventListener('click', selectmokepons)

	document.getElementById('btn-fire').addEventListener('click', fireAttack)
	document.getElementById('btn-water').addEventListener('click', waterAttack)
	document.getElementById('btn-ground').addEventListener('click', groundAttack)
}

function selectmokepons(){
	let mokepon = document.getElementById('players-mokepon')

	if (document.getElementById('acynonyx').checked){ // .checked returns true if the element is selected
		mokepon.innerHTML = 'Acynonyx'
	}
	else if (document.getElementById('piwith').checked){
		mokepon.innerHTML = 'Piwith'
	}
	else if (document.getElementById('berry').checked){
		mokepon.innerHTML = 'Berry'
	}

	if (mokepon.innerHTML != ""){
		alert("You choose " + mokepon.innerHTML + ".")
		selectEnemysmokepon()
		document.getElementById('select-mokepon').style.display = 'none'
		document.getElementById('select-attack').style.display = 'flex'
		document.getElementById('battle').style.display= 'flex'

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
		case 1: mokepons.innerHTML = 'Acynonyx'
			break
		case 2: mokepons.innerHTML = 'Piwith'
			break
		case 3: mokepons.innerHTML = 'Berry'
			break
	}

	alert("Enemy's mokepon is " + mokepons.innerHTML)
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
	let playersAttackP = document.createElement('p')
	playersAttackP.innerHTML = playersAttack

	document.getElementById('players-card').appendChild(playersAttackP)

	let battleMessageP = document.createElement('p')
	battleMessageP.innerHTML = winnerMessage

	document.getElementById('result-card').appendChild(battleMessageP)

	let enemysAttackP = document.createElement('p')
	enemysAttackP.innerHTML = enemysAttack

	document.getElementById('enemys-card').appendChild(enemysAttackP)
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

	document.getElementById('messages').appendChild(paragraph)

	disableAttackButtons()
	document.getElementById('messages').style.display = 'flex'
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
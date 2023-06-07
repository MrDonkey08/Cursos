let playersAttack // it doesn't belong to a function so it's a global variable and can be accessed anywhere in this file
let enemysAttack

function startGame(){
    let btnPet = document.getElementById('btn-pet')
    btnPet.addEventListener('click', selectPets)

    let btnFire = document.getElementById('btn-fire')
    let btnWater = document.getElementById('btn-water')
    let btnGround = document.getElementById('btn-ground')

    btnFire.addEventListener('click', fireAttack)
    btnWater.addEventListener('click', waterAttack)
    btnGround.addEventListener('click', groundAttack)
}

function selectPets(){
    let pet = document.getElementById('players-pet')

    if (document.getElementById('hipodoge').checked){ // .checked returns true if the element is selected
        pet.innerHTML = 'Hipodoge'
    }
    else if (document.getElementById('capipe').checked){
        pet.innerHTML = 'Capipe'
    }
    else if (document.getElementById('ratike').checked){
        pet.innerHTML = 'Ratike'
    }

    if (pet.innerHTML != ""){
        alert("You choose " + pet.innerHTML + ".")
        selectEnemysPet()
    }
    else{
        alert("You haven't choose a pet.")
    }
}

function randomNum(min, max){ // returns a value between min and max
    return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a decimal number between 0 and 1.
}

function selectEnemysPet(){
    let pets = document.getElementById('enemys-pet')
    let opt = randomNum(1, 3)
    
    switch(opt){
        case 1: pets.innerHTML = 'Hipodoge'
            break
        case 2: pets.innerHTML = 'Capipe'
            break
        case 3: pets.innerHTML = 'Ratike'
            break
    }

    alert("Enemy's pet is " + pets.innerHTML)
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
}

window.addEventListener('load', startGame)
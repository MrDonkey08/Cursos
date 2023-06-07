function startGame(){
    let btnPet = document.getElementById('btn-pet')
    btnPet.addEventListener('click', selectPets)
    

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

window.addEventListener('load', startGame)
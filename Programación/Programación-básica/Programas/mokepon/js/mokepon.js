function startGame(){
    let btnPet = document.getElementById('btn-pet')
btnPet.addEventListener('click', selectPet)

}

function selectPet(){
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
    }
    else{
        alert("You haven't choose a pet.")
    }
}


window.addEventListener('load', startGame)
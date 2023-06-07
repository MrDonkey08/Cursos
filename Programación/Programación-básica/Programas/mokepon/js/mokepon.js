function startGame(){
    let btnPet = document.getElementById('btn-pet')
btnPet.addEventListener('click', selectPet)

}

function selectPet(){
    let pet = ""

    if (document.getElementById('hipodoge').checked){ // .checked returns true if the element is selected
        pet = "Hipodoge"
    }
    else if (document.getElementById('capipe').checked){
        pet = "Capipe"
    }
    else if (document.getElementById('ratike').checked){
        pet = "Ratike"
    }

    if (pet != ""){
        alert("You choose " + pet + ".")
    }
    else{
        alert("You haven't choose a pet.")
    }
}


window.addEventListener('load', startGame)
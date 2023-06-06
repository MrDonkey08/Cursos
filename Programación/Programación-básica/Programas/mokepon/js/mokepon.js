alert("Tengo sueño")

function selectPet(){
    alert('You choose your pet')
}

let btMascota = document.getElementById('bt-pet')
btMascota.addEventListener('click', selectPet)

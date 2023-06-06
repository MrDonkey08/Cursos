function random(min, max){ // returns a value between min and max
    return Math.floor(Math.random() * (max - min + 1) + min) // Math.floor truncate (cut) the the decimal part and Math.random() returns a float number between 0 and 1.
}

function playerOpt(){
        do{
            player = prompt("Select: 1 for stone, 2 for paper and 3 for scissors.") // prompt converts the variable to string type
            player = parseInt(player) // parseInt to convert from string to int. If in player's value there's no numbers, it would take the NaN value, which means "Not a Number"
            if(player < 1 || player > 3 || isNaN(player)){
                alert("Invalid option. Try again.")
            }
        } while(player < 1 || player > 3 || isNaN(player)) // isNaN returns true if the value of the paremeter (player) is equal to NaN 
        return player
    }

function choice(play, player){
    switch(play){
        case 1: plays = "stone"
            break;
        case 2: plays = "paper."
            break;
        case 3: plays = "scissors."
            break;
    }
    alert(player + " selected " + plays)
}

function getWinner(player, pc){
    if(player == pc){
    alert("Draw.")
    }
    else if((player == 1) && (pc == 3) || (player == 2) && (pc == 1) || (player == 3) && (pc == 2)){
        alert("Player wins.")
        return 1
    }
    else{
        alert("PC wins.")
        return 2
    }
}

function champion(playerWins, pcWins){
    if(playerWins == 3){
            alert("You're the winner")
        } 
        else if (pcWins == 3){
            alert("PC is the winner")
        }
}

let player1 = "Player", player2 = "PC"
let player = 0, min = 0, max = 0, pc = 0
let playerWins = 0, pcWins = 0, winner = 0

do{
    pc = random(1, 3)
    player = playerOpt()
    choice(player, player1)
    choice(pc, player2)
    winner = getWinner(player, pc)

    if(winner == 1){
        playerWins += 1
    }
    else if (winner == 2){
        pcWins += 1
    }

    alert("Player Victories = " + playerWins + " and Pc Victories = " + pcWins)
    champion(playerWins, pcWins)
} while(playerWins < 3 && pcWins < 3)
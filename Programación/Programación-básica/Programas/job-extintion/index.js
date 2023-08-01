const express = require("express") // express library import
const cors = require("cors")
const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const players = []

class Player {
	constructor(id){
		this.id = id
	}
	assignDino(dino){
		this.dino = dino
	}
	updatePosition(x, y){
		this.x = x
		this.y = y
	}
	assignAttacks(attacks){
		this.attacks = attacks
	}
}

class Dino {
	constructor(name){
		this.name = name
	}
}

app.get("/join", (req, res) => { // where req is the request and res the object whe use to manages the responses
	const id = `${Math.random()}`
	const player = new Player(id)

	players.push(player)

	res.setHeader("Access-Control-Allow-Origin", "*")
	
	res.send(id)
}) // .get for client's requests

app.post("/dino/:playerId", (req, res) => {
	const playerId = req.params.playerId || ""
	const name = req.body.dino || ""
	const dino = new Dino(name)
	
	const playerIndex = players.findIndex((player) => playerId === player.id)

	if(playerIndex >= 0){
		players[playerIndex].assignDino(dino)
	}

	res.end()
})

app.post("/dino/:playerId/position", (req, res) => {
	const playerId = req.params.playerId || ""
	const x = req.body.x || 0
	const y = req.body.y || 0

	const playerIndex = players.findIndex((player) => playerId === player.id)

	if(playerIndex >= 0){
		players[playerIndex].updatePosition(x, y)
	}

	const enemies = players.filter((player) => playerId !== player.id)

	res.send({
		enemies
	})
})

app.post("/dino/:playerId/attacks", (req, res) => {
	const playerId = req.params.playerId || ""
	const attacks = req.body.attacks || []
	
	const playerIndex = players.findIndex((player) => playerId === player.id)

	if(playerIndex >= 0){
		players[playerIndex].assignAttacks(attacks)
	}
	res.end()
})

app.get("/dino/:playerId/attacks", (req, res) => {
	const playerId = req.params.playerId || ""
	const player = players.find((player) => player.id === playerId)

	res.send({
		attacks: player.attacks || []
	})
})

app.listen(8080, () => {
	console.log("Server running")
})
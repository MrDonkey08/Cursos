const express = require("express") // express library import
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())

const players = []

class Player {
	constructor(id){
		this.id = id
	}
	assignMokepon(mokepon){
		this.mokepon = mokepon
	}
	updatePosition(x, y){
		this.x = x
		this.y = y
	}
}

class Mokepon {
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

app.post("/mokepon/:playerId", (req, res) => {
	const playerId = req.params.playerId || ""
	const name = req.body.mokepon || ""
	const mokepon = new Mokepon(name)
	
	const playerIndex = players.findIndex((player) => playerId === player.id)

	if(playerIndex >= 0){
		players[playerIndex].assignMokepon(mokepon)
	}

	console.log(players)
	console.log(playerId)
	res.end()
})

app.post("/mokepon/:playerId/position", (req, res) => {
	const playerId = req.params.playerId || ""
	const x = req.body.x || 0
	const y = req.body.y || 0

	const playerIndex = players.findIndex((player) => playerId === player.id)

	if(playerIndex >= 0){
		players[playerIndex].updatePosition(x, y)
	}

	const enemies = players.filter((player) => playerId !== player.id)

	console.log(enemies)

	res.send({
		enemies
	})
})

app.listen(8080, () => {
	console.log("Server running")
})
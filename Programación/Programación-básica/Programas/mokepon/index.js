const express = require("express") // express library import
const app = express()
const players = []

class Player {
	constructor(id){
		this.id = id
	}
}

app.get("/join", (req, res) => { // where req is the request and res the object whe use to manages the responses
	const id = `${Math.random()}`
	const player = new Player(id)

	players.push(player)

	res.setHeader("Access-Control-Allow-Origin", "*")
	
	res.send(id)
}) // .get for client's requests

app.listen(8080, () => {
	console.log("Server running")
})
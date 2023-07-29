const express = require("express") // express library import

const app = express()

app.get("/", (req, res) => { // where req is the request and res the object whe use to manages the responses
	res.send("Hola")
}) // .get for client's requests

app.listen(8080, () => {
	console.log("Server running")
})
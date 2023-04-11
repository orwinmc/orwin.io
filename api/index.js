const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 4000

app.get('/api', (req, res) => {
	res.json({ status: 'OK' })
})

app.listen(port, () => console.log(`Listening on ${port}`))

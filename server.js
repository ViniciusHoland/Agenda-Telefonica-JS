import express from 'express'

const app = express()

const listContacts = []

app.get('/contacts', (request, response) => {

    response.send(listContacts)
})


app.listen(3000)

import express from 'express'

const app = express()

// informa ao express que vamos usar json nas requisições
app.use(express.json())

const listContacts = []

app.post('/contacts', (request, response) => {


    const newContact = {
        name: request.body.name,
        contact: request.body.contact
    }

    listContacts.push(newContact)

    response.status(201).json(request.body)

})

app.get('/contacts', (request, response) => {

    response.status(200).json(listContacts)


})


app.listen(3000)

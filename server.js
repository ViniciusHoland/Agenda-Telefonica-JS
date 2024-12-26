import express from 'express'

const app = express()

app.listen(3000)

// informa ao express que vamos usar json nas requisições
app.use(express.json())


const listContacts = []
let nextID = 1

app.post('/contacts', (request, response) => {


    const newContact = {
        name: request.body.name,
        contact: request.body.contact,
        id: nextID++
    }

    listContacts.push(newContact)

    response.status(201).json(newContact)

})

app.get('/contacts', (request, response) => {

    response.status(200).json(listContacts)


})

app.get('/contacts/:id', (req , res ) => {

    const id = req.params.id

    res.status(200).json(listContacts[id-1])


})




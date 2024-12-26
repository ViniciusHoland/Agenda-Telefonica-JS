import express from 'express'

const app = express()

app.listen(3000)

// informa ao express que vamos usar json nas requisições
app.use(express.json())

let nextID = 1
const listContacts = [
    {name: 'vinicius', contact: 94723569, id: nextID++},
    {name: 'vitoria', contact: 80800404, id: nextID++}

]


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

app.delete('/contacts/:id', (req,res) => {

    const id = req.params.id 

    const indexToRemove = listContacts.findIndex(contact => contact.id == id)
    

    if (indexToRemove === -1) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    const removedContact =  listContacts.splice(indexToRemove,1)

    res.status(200).json(removedContact)

})




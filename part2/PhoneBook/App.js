import React, { useState } from 'react'
import Filter from './components/Filter'
import {PersonForm, Persons} from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const trimName = newName.trim();
        const trimNumber = newNumber.trim();
        if (trimName === '' || trimNumber === '') {
            alert('name or number input is empty')
            return
        }
        if (persons.filter(p => p.name === trimName).length !== 0) {
            alert(`${trimName} is already added to phonebook`)
            return
        }
        const personObj = {
            name: trimName,
            number: trimNumber
        }
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (evt) => {
        setNewName(evt.target.value)
    }

    const handleNumberChange = (evt) => {
        setNewNumber(evt.target.value)
    }

    const handleFilterChange = (evt) => {
        setFilter(evt.target.value)
    }

    const filterPersons = filter === '' ? persons :
        persons.filter(
            p => p.name.toLowerCase().indexOf(filter) !== -1)

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter val={filter} evt={handleFilterChange} />
            <h2>Add a new</h2>
            <PersonForm submitEvt={addPerson} name={newName}
            nameChange={handleNameChange} number={newNumber}
            numberChange={handleNumberChange} />
            <h2>Numbers</h2>
            <Persons persons={filterPersons} />
        </div>
    )
}

export default App
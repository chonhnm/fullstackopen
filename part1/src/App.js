import React, { useState } from 'react'

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
            <p>
                filter shown with <input value={filter} onChange={handleFilterChange} />
            </p>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>{filterPersons.map((p, i) => <li key={i}>{p.name} {p.number}</li>)}</ul>
        </div>
    )
}

export default App
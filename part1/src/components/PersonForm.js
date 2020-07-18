import React from 'react'

const PersonForm = ({ submitEvt, name, nameChange,
    number, numberChange }) => (
        <form onSubmit={submitEvt}>
            <div>
                name: <input value={name} onChange={nameChange} />
            </div>
            <div>
                number: <input value={number} onChange={numberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

const Persons = ({persons}) => (
    <ul>{persons.map((p, i) => <li key={i}>{p.name} {p.number}</li>)}</ul>
)

export {PersonForm, Persons}
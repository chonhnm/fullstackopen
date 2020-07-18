import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(resq => setCountries(resq.data))
    }, [])

    const handleFilterChange = evt => {
        setFilter(evt.target.value)
    }

    const trimFilter = filter.trim().toLowerCase()

    if (trimFilter === '') {
        return (
            <div>
                <Filter val={filter} evt={handleFilterChange} />
            </div>
        )
    } else {
        const filterContries = countries.filter(
            c => c.name.toLowerCase().indexOf(trimFilter) !== -1)
        if (filterContries.length > 20) {
            return (
                <div>
                    <Filter val={filter} evt={handleFilterChange} />
                    <br />Too many matches, specify another filter
                </div>
            )
        } else if (filterContries.length > 1) {
            return (
                <div>
                    <Filter val={filter} evt={handleFilterChange} />
                    {filterContries.map(c =>
                        <div key={c.callingCodes}>{c.name}<br /></div>)}
                </div>
            )
        } else if (filterContries.length === 1) {
            const cty = filterContries[0]
            return (
                <div>
                    <Filter val={filter} evt={handleFilterChange} />
                    <h2>{cty.name}</h2>
                    <p>capital {cty.capital}
                        <br />population {cty.population}
                    </p>
                    <h3>languages</h3>
                    <ul>
                        {cty.languages.map(
                            l => <li key={l.iso639_1}>{l.name}</li>)}
                    </ul>
                    <p><img src={cty.flag} alt='country flag' /></p>

                </div>
            )
        } else {
            return (
                <div>
                    <Filter val={filter} evt={handleFilterChange} />
                </div>
            )
        }
    }
}

const Filter = ({ val, evt }) => (
    <p>find countries: <input value={val} onChange={evt} /></p>
)

export default App
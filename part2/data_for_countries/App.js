import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])
    const [url, setUrl] = useState('')
    const [data, setData] = useState({})
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(resq => setCountries(resq.data))
    }, [])

    useEffect(() => {
        console.log('url:', url)
        if (url !== '') {
            axios.get(url).then(resp => {
                setData(resp.data)
            })
        }

    }, [url])



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
            const u = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${cty.capital}`
            console.log('u:', u)
            if (u !== url) {
                setUrl(u)
            }
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
                    <Weather data={data} city={cty.capital} />
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

const Weather = ({ data, city }) => {
    if (!data.current) {
        return (<div>data loading</div>)
    } else {
        return (
            <div>
                <h2>Weather in {city}</h2>
                <p>temperature: {data.current.temperature} Cellius</p>
                <img src={data.current.weather_icons[0]} alt='weather icon' />
                <p>wind:{data.current.wind_speed} mph direction {data.current.wind_dir} </p>
            </div>
        )
    }
}

export default App
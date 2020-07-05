import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const H2 = ({ text }) => <h2>{text}</h2>

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ stats, total }) => {
  if (total === 0) {
    return (<p>No feedback given</p>)
  } else {
    let i = 0
    return (
      <>
        {stats.map(stat =>
          <Statistic text={stat.name} value={stat.value} key={i++} />
        )}
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalClick = bad + neutral + good
  const average = (good - bad) / totalClick
  const positive = (good / totalClick * 100) + '%'

  const statistics = [
    {
      name: 'good',
      value: good
    },
    {
      name: 'neutral',
      value: neutral
    },
    {
      name: 'bad',
      value: bad
    }, {
      name: 'average',
      value: average
    }, {
      name: 'positive',
      value: positive
    }
  ]

  const goodClickHandler = () => setGood(good + 1)
  const ntClickHandler = () => setNeutral(neutral + 1)
  const badClickHandler = () => setBad(bad + 1)

  return (
    <div>
      <H2 text='give feedback' />
      <Button clickHandler={goodClickHandler} text='good' />
      <Button clickHandler={ntClickHandler} text='neutral' />
      <Button clickHandler={badClickHandler} text='bad' />
      <H2 text='statistics' />
      <Statistics stats={statistics} total={totalClick} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
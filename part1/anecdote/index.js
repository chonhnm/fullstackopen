import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const H2 = ({ text }) => <h2>{text}</h2>

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>
    {text}
  </button>
)

const App = (props) => {
  const firstIdx = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(firstIdx)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecHandler = () => {
    const idx = Math.floor(Math.random() * anecdotes.length)
    setSelected(idx)
  }
  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  let mostVotedIdx = selected
  let max = 0
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i]
      mostVotedIdx = i;
    }
  }

  return (
    <div>
      <H2 text='Anecdote of the day' />
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes </p>
      <Button clickHandler={voteHandler} text='vote' />
      <Button clickHandler={nextAnecHandler} text='next anecdotes' />
      <H2 text='Anecdote with most votes' />
      <p>{props.anecdotes[mostVotedIdx]}</p>
    </div>
  
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
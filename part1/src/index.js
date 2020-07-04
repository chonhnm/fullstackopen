import React from 'react'
import ReactDOM from 'react-dom'

const Header = p => (
  <>
    <h1>{p.course}</h1>
  </>
)

const Content = (p) => {
  console.log(p)
  let parts = p.parts
  let i = 0
  return (
    <>
      {parts.map(p => <Part part={p} key={i++} />)}
    </>
  )
}

const Part = p => (
  <>
    <p>
      {p.part.name} {p.part.exercises}
    </p>
  </>
)

const Total = props => (
  <>
    <p>
      Number of exercises {props.num}
    </p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  let total = 0
  parts.forEach(p => total += p.exercises)

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total num={total} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
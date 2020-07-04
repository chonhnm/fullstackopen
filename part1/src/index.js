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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total num={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
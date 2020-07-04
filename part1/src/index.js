import React from 'react'
import ReactDOM from 'react-dom'

const Header = p => (
  <>
    <h1>{p.course}</h1>
  </>
)

const Content = (p) => {
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

const Total = p => {
  let total = 0
  p.parts.forEach(p => total += p.exercises)
  return (
  <>
    <p>
      Number of exercises {total}
    </p>
  </>
)
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
 
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
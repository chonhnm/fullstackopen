import React from 'react'
import ReactDOM from 'react-dom'

const Header = p => (
  <>
    <h1>{p.course}</h1>
  </>
)

const Content = props => (
  <>
    <p>
      {props.part} {props.exe}
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content part={part1} exe={exercises1}/>
      <Content part={part2} exe={exercises2}/>
      <Content part={part3} exe={exercises3}/>
      <Total num={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
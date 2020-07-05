import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <>
    <h1>{text}</h1>
  </>
)

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(p => <Part part={p} key={p.id} />)}
    </>
  )
}

const Part = p => (
  <p>
    {p.part.name} {p.part.exercises}
  </p>
)

const Total = ({ parts }) => {
  let total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const Courses = ({ courses }) => (
  courses.map(course => (
    <Course course={course} key={course.id} />
  ))
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))
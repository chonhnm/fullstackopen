import React from 'react'

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

  export default Courses
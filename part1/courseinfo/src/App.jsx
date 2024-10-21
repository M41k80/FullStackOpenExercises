const App = () => {
  const course = {
  name : 'Half Stack application development',
  parts : [
    {
      name:'Fundamentals of React',
      exercises : 10
    },
    {
      name:'Using props to pass data',
      exercises : 7
    },
    {
      name:'State of a component',
      exercises : 14
    }
  ]
  }
    

  const Header = ({course}) => {
    console.log({course})
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part, index) => ( 
          <Part key={index} part={part} /> ))}
      </div>
    )
  }

  const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>Number of exercises: {total}</p>
    )
  }
  return (
  
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <br />
      
      
      
    </div>
  )
}



export default App
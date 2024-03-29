import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'


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

  return (
    <div>
      <Header courses={course} />
      <Content {...parts} />
      <Total {...parts} />
    </div>
  )
}

export default App
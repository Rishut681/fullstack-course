import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'


const App = () => {
  const courses = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <>
      <Header course={courses} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      </>
    </div>
  )
}

export default App
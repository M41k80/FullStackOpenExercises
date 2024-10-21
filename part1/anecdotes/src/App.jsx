import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(Array(anecdotes.length).fill(0))

  const GenerateRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const PointsAnecdotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const GetMaxPointIndex = () => {
    const maxPoints = Math.max(...points)
    return points.indexOf(maxPoints)
  }

  const highestPointsIndex = GetMaxPointIndex()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={PointsAnecdotes}>vote</button>
      <button onClick={GenerateRandomAnecdote}>Genetare Random Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestPointsIndex]}</p>
      <p>has {points[highestPointsIndex]} votes</p>

    </div>
  )
}

export default App
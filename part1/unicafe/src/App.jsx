import { useState } from 'react'

const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => (
  <p>{text} {value}</p>
)



const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  // conditional for no feedback given
  if (all === 0) {
    return <p>No feedback given</p>
  }



  const total = good * 1 + neutral * 0 + bad * -1
  const average = all === 0 ? 0 : total / all
  const positive = total === 0 ? 0 : (good / all) * 100
  // console.log({all, total, average, positive})

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><StatisticsLine text="good" value={good} /></tr>
          <tr><StatisticsLine text="neutral" value={neutral} /></tr>
          <tr><StatisticsLine text="bad" value={bad} /></tr>
          <tr><StatisticsLine text="all" value={all} /></tr>
          <tr><StatisticsLine text="average" value={`${average} %`} /></tr>
          <tr><StatisticsLine text="positive" value={`${positive} %`} /></tr>
         
        </tbody>
      </table>

      {/* <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={`${average} %`} />
      <StatisticsLine text="positive" value={`${positive} %`} /> */}

      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average} %</p>
      <p>positive {positive} %</p> */}
    </div>
  )
}




const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  // const All = ({good, neutral, bad}) => {
  //   const total = good + neutral + bad
  //   return (
  //     <p>all {total}</p>
  //   )
  // }

  // const Average = ({good, neutral, bad}) => {
  //   const totalsuma = good + neutral + bad
  //   const total = good * 1 + neutral * 0 + bad * -1
  //   const average = totalsuma === 0 ? 0 : total / totalsuma
  //   return (
  //     <p>average {average} %</p>
  //   )
  // }

  // const Positive = ({good, neutral, bad}) => {
  //   const total = good + neutral + bad
  //   const positive = total === 0 ? 0 : (good / total) * 100
  //   return (
  //     <p>positive {positive} %</p>
  //   )
  // }

 

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
{/* 
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} /> */}
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}


export default App

import { useState } from 'react';

const Button = ({onClick,text}) =>{
  return(
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const App = () => {

  const [good , setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  }

  const incrementNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  }

  const incrementBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  }
  

  return (
    <div>
      <h1>Give feedback!</h1>

      <Button onClick={incrementGood} text='good'/>
      <Button onClick={incrementNeutral} text='neutral'/>
      <Button onClick={incrementBad} text='bad'/>

      <h2>Statistics</h2>

      good   {good} <br></br>
      neutral   {neutral} <br></br>
      bad    {bad}

    </div>
  )
}

export default App
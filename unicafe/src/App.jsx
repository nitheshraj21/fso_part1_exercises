import {useState } from 'react';

const Button = ({onClick,text}) =>{
  return(
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const Statistics = (props) => {
      if (props.all === 0){
        return (
          <>
            <h2>Statistics</h2>
            <div>No feedback given.</div>
         </>
        )
      }
      else{
         return (
          <>
            <h2>Statistics</h2>
            good {props.good} <br></br>
            neutral {props.neutral} <br></br>
            bad {props.bad}<br></br>
            all {props.all}<br></br>
            average {props.average}<br></br>
            positive {props.positive} 
         </>
        )
      } 

}

const App = () => {

  const [good , setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allValue , setAllValue] = useState(0)

  const incrementGood = () => {
    const newGood = good + 1;
    setGood(newGood);

    const newAllValue = allValue + 1;
    setAllValue(newAllValue);
  }

  const incrementNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  }

  const incrementBad = () => {
    const newBad = bad + 1;
    setBad(newBad);

    const newAllValue = allValue - 1;
    setAllValue(newAllValue);
  }
  
  const all = (good + neutral + bad)
  const average = all === 0 ? 0 : allValue / all ;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <h1>Give feedback!</h1>

      <Button onClick={incrementGood} text='good'/>
      <Button onClick={incrementNeutral} text='neutral'/>
      <Button onClick={incrementBad} text='bad'/>

      <Statistics good = {good} neutral ={neutral}
        bad = {bad}   all = {all} average ={average}
        positive ={positive}/>

    </div>
  )
}

export default App
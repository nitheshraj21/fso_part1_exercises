import {useState } from 'react';

const Button = ({onClick,text}) =>{
  return(
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const StatisticLine = (props) => {
  if(props.text === 'positive'){
    return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
   )
  }
  else{
    return(
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
   )
  }
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
            <table>
              <tbody>
                <StatisticLine text="good" value = {props.good}/>
                <StatisticLine text='neutral' value ={props.neutral}/>
                <StatisticLine text='bad' value ={props.bad}/>
                <StatisticLine text = 'all' value = {props.all}/>
                <StatisticLine text= 'average' value = {props.average}/>
                <StatisticLine text ='positive' value = {props.positive} />
              </tbody>
            </table>
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
        positive ={positive} /> 

    </div>
  )
}

export default App
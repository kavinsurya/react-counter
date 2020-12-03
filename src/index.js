import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Counter = (props) => {
  return (
    <div>
      <p>Count:{props.count}</p>
      <button className="increment" onClick={() => props.increment()}>Increment</button>
      <button className="decrement" onClick={() => props.decrement()}>Decrement</button>
      <button className="deleteCounter" onClick={() => props.deleteCounter()}>Delete counter</button>
    </div>
  )

}

const CounterApp = () => {
  const [counts, setCounts] = React.useState([0])


  const addCouner =() => {
  const newCounts =  counts.concat([0])
  setCounts(newCounts)
  }

  const increment =(currentIndex) =>{
   const newCounts = counts.map((value, index) => index ===  currentIndex ? value + 1 : value)
   setCounts(newCounts)
  }

  const decrement =(currentIndex) =>{
    const newCounts = counts.map((value, index) => index ===  currentIndex ? value - 1 : value)
    setCounts(newCounts)
   }

   const deleteCounter = index => {
    const newCounts = [...counts];
    newCounts.splice(index, 1);
    setCounts(newCounts);
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Counter App</h1>
      {counts.map((ele, idx) => 
      <Counter key={idx} count={ele} 
      increment ={() => increment(idx)} 
      decrement ={() => decrement(idx)} 
      deleteCounter ={() => deleteCounter(idx)}/>)}
      <br /><br />
      <button onClick={addCouner}>Add counter</button>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
      < CounterApp />
 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

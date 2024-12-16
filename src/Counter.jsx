import { useState } from "react"


export default function Counter() {

 
  // const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
  //  const monthsOfYear = [
  //   "January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"
  // ];
   const [step, setStep] = useState(1);
   const [count, setCount] = useState(0);
   
   const date = new Date();
   date.setDate(date.getDate() + count)
   

  
   //function to change Step

   function minusStep () {
        setStep((s) => s-1)
   }

   function plusStep () {
      setStep((s) => s+1)
   }

   //Function to change Count

   function minusCount () {
        setCount((c) => c-step)
   }

   function plusCount () {
        setCount((c) => c+step)
   }

  //  function plusToday () {
  //   setToday(daysOfWeek[date.getDay() + count])
  //  }

  return (
    <div className="counter-div">
      <div className="step-div">
        <button className="minus" onClick={() => minusStep()}>-</button>
        <p>Step: {step}</p>
        <button className="plus" onClick={() => plusStep()}>+</button>
      </div>


      <div className="count-div">
      <button className="minus" onClick={() => minusCount()}>-</button>
        <p>Count: {count}</p>
        <button className="plus" onClick={() => plusCount()}>+</button>
      </div>



      <div className="result-div">
        
        <p>
        <span>
          {count === 0 ? 
        "Today is " 
        : 
        count > 0 ? `${count} days from today is `: `${Math.abs(count)} days ago was `  }
        </span>

        <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import './App.css'
import {TimerContextProvider} from './context/index'
import TimerForm from './comps/TimerForm';
import TimerList from './comps/TimerList';

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (taskName) => {
    setTimers((prev) => 
      [
        ...prev, 
        {
          id: Date.now(),
          taskName,
          elapsedTime: 0,
          isRunning: false,
          startTime: null
        }
      ]
    )
  }

  const deleteTimer = (id) => {
    setTimers((prev) => prev.filter((prevTimer) => prevTimer.id !== id))
  }

  const updateTimer = (id, newTaskName) => {
    setTimers((prev) => prev.map((prevTimer) => prevTimer.id === id ? {...prevTimer, taskName : newTaskName} : prevTimer ));
  }

  // const toggleTimer = (id) => {
  //   setTimers((prev) => {
  //     return prev.map((prevTimer) => {
  //      if(prevTimer.id === id){
  //        return {
  //          ...prevTimer,
  //          isRunning: !prevTimer.isRunning,
  //          startTime: !prevTimer.isRunning ? Date.now() : prevTimer.startTime,
  //          elapsedTime: prevTimer.isRunning ? Date.now() - prevTimer.startTime : prevTimer.elapsedTime
  //        }}
  //        else{
  //          prevTimer
  //       }
  //     }
  //   )
  //   }
  // }

  const toggleTimer = (id) => {
    setTimers((prev) => 
    prev.map((prevTimer) => {
      if(prevTimer.id === id){
        return{
          ...prevTimer,
          isRunning: !prevTimer.isRunning,
          startTime: !prevTimer.isRunning ? Date.now() : prevTimer.startTime ,
          elapsedTime: prevTimer.isRunning ? prevTimer.elapsedTime + (Date.now() - prevTimer.startTime) : prevTimer.elapsedTime,
        }
      }else{
        return prevTimer;
      }
    })
    )
  }

  const resetTimer = (id) => {
    setTimers((prev) => 
      prev.map((prevTimer) => {
        if(prevTimer.id === id){
          return {
            ...prevTimer,
            isRunning: false,
            startTime: null,
            elapsedTime: 0
          }
        }else{
          return prevTimer
        }
      })
    )
  };

  useEffect(() => {
    let timers = JSON.parse(localStorage.getItem("timers"));
    if(timers && timers.length > 0){
      setTimers(timers)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers])


  return (
    <TimerContextProvider value = {{timers, addTimer, deleteTimer, updateTimer, toggleTimer, resetTimer}} >
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-center text-3xl font-bold mb-8">Time Logging App</h1>
          <TimerForm/>
          <TimerList/>
        </div>
      </div>
    </TimerContextProvider>
  )
}

export default App

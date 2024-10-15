import React, {useEffect, useState} from 'react';
import {useTimer} from "../context/index";

function TimerItem({timer}) {
    const {deleteTimer, toggleTimer, resetTimer, updateTimer} = useTimer();
    const [displayTime, setDisplayTime] = useState(timer.elapsedTime);
    const [newTaskName, setNewTaskName] = useState(timer.taskName)
    const [isTimerEditable, setIsTimerEditable] = useState(false);
    
    const editTimer = () => {
        updateTimer(timer.id, newTaskName);
        setIsTimerEditable(false)
    }

    useEffect(() => {
        let interval = null;
        if(timer.isRunning){
            interval = setInterval(() => {
                // setDisplayTime(Date.now() - timer.startTime)
                // setDisplayTime( (Date.now() - timer.startTime) + timer.elapsedTime)
                setDisplayTime((prev) => prev + 1000)
            }, 1000)
            console.log("inside if");
        }else if(timer.elapsedTime === 0){
            setDisplayTime(0)
        }
        else{
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    }, [timer.isRunning, timer.elapsedTime, timer.startTime]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds/1000);
        const Hours = Math.floor(totalSeconds/3600);
        const Minutes = Math.floor((totalSeconds % 3600 )/ 60);
        const Seconds = totalSeconds % 60;

        return `${timer.startTime ? (Hours < 10 ? "0" + Hours : Hours) : "00"} : ${timer.startTime ? (Minutes < 10 ? "0" + Minutes : Minutes) : "00"} :
        ${timer.startTime ? (Seconds < 10 ? "0" + Seconds : Seconds) : "00"}`
    }

    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div>
                <h3 className="text-xl">{timer.taskName}</h3>
                <p className="text-gray-600">Elapsed Time: {formatTime(displayTime)}s</p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => toggleTimer(timer.id)}
                    className={`px-4 py-2 ${timer.isRunning ? 'bg-red-500' : 'bg-green-500'} text-white`}
                >
                    {timer.isRunning ? 'Stop' : 'Start'}
                </button>

                <button onClick={() => resetTimer(timer.id)} className="bg-yellow-500 px-4 py-2 text-white">
                    Reset
                </button>
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {

                        if (isTimerEditable) {
                            editTimer();
                        } else setIsTimerEditable((prev) => !prev);
                    }}
                >
                    {isTimerEditable ? "📁" : "✏️"}
                </button>
                <button onClick={() => deleteTimer(timer.id)} className="bg-gray-500 px-4 py-2 text-white">
                    Delete
                </button>
            </div>
        </div>

        // <div
        //     className={`flex items-center border border-gray-200 rounded-lg px-4 py-3 gap-x-4 shadow-md transition duration-300 ${
        //         timer.completed ? "bg-green-100" : "bg-purple-100"
        //         }`}
        // >
        //     {/* Task Name Input */}
        //     <input
        //         type="text"
        //         className={`w-full bg-transparent border-b border-dashed outline-none ${
        //             isTimerEditable ? "border-gray-400" : "border-transparent"
        //             } ${
        //             timer.completed ? "line-through text-gray-500" : "text-gray-900"
        //             } px-2 py-1`}
        //         value={newTaskName}
        //         onChange={(e) => setNewTaskName(e.target.value)}
        //         readOnly={!isTimerEditable}
        //         placeholder="Task Name"
        //     />

        //     {/* Elapsed Time Display */}
        //     <div className="flex flex-col items-center">
        //         <p className="text-gray-600 font-mono text-sm">Elapsed Time</p>
        //         <p className="text-lg font-semibold text-gray-800 tracking-wide">
        //             {formatTime(displayTime)}
        //         </p>
        //     </div>

        //     {/* Action Buttons */}
        //     <div className="flex gap-2">
        //         {/* Start/Stop Timer Button */}
        //         <button
        //             onClick={() => toggleTimer(timer.id)}
        //             className={`px-3 py-2 rounded-md text-sm font-semibold text-white ${
        //                 timer.isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        //                 } transition duration-200`}
        //         >
        //             {timer.isRunning ? 'Stop' : 'Start'}
        //         </button>

        //         {/* Reset Timer Button */}
        //         <button
        //             onClick={() => resetTimer(timer.id)}
        //             className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition duration-200"
        //         >
        //             Reset
        // </button>

        //         {/* Edit/Save Timer Button */}
        //         <button
        //             onClick={() => {
        //                 if (isTimerEditable) {
        //                     editTimer();
        //                 } else {
        //                     setIsTimerEditable((prev) => !prev);
        //                 }
        //             }}
        //             className={`px-3 py-2 rounded-md text-sm font-semibold text-gray-700 border ${
        //                 isTimerEditable ? "border-blue-500 bg-blue-100 hover:bg-blue-200" : "border-gray-300 bg-gray-50 hover:bg-gray-100"
        //                 } transition duration-200`}
        //             disabled={timer.completed}
        //         >
        //             {isTimerEditable ? "Save" : "Edit"}
        //         </button>

        //         {/* Delete Timer Button */}
        //         <button
        //             onClick={() => deleteTimer(timer.id)}
        //             className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition duration-200"
        //         >
        //             Delete
        // </button>
        //     </div>
        // </div>
 

    )
}

export default TimerItem

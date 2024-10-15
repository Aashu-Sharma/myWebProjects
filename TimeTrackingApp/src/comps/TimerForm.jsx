import React, {useState} from 'react';
import {useTimer} from '../context/index'

function TimerForm() {
    const [taskName, setTaskName] = useState("");

    const {addTimer} = useTimer();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!taskName) return;
        addTimer(taskName);
        setTaskName("");
    }

    return (
        <form className = "mb-4" onSubmit = {handleSubmit}>
            <input 
                type="text"
                placeholder = "Enter Task Name"
                className = "border p-2 w-full"
                value = {taskName}
                onChange = {(e) => setTaskName(e.target.value)}
            />

            <button type="submit" className="bg-blue-500 text-white mt-2 px-4 py-2">
                Add Timer
            </button>
        </form>

    )
}

export default TimerForm

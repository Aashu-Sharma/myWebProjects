import React from 'react';
import {useTimer} from '../context/index'
import TimerItem from './TimerItem';

function TimerList() {
    const {timers} = useTimer();

    if (timers.length === 0) {
        return <p className="text-center text-gray-600">No timers yet! Add a new one above.</p>;
    } 
    else{
        return (
            <div>
                {timers.map((timer) => (
                    <TimerItem key={timer.id} timer={timer} />
                ))}
            </div>
        )
    }

    
}

export default TimerList

import {createContext, useContext} from 'react';

export const TimerContext = createContext({
    timers: [
        {
            id: 1,
            taskName: "Name of the Task",
            elapsedTime: 0,   // Default: 0 milliseconds elapsed
            isRunning: false,
            startTime: null,  // Default: null indicates not started
            completed: false
        }
    ], 

    addTimer: (taskName) => {},
    deleteTimer: (id) => {},
    updateTimer: (id, newTaskName) => {},
    toggleTimer: (id) => {},
    resetTimer: (id) => {}
});

export const TimerContextProvider = TimerContext.Provider;

export default function useTimer(){
    return useContext(TimerContext);
}


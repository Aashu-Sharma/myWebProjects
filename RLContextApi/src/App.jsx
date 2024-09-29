import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './comps/Login';
import Profile from './comps/Profile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

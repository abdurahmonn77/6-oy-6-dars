import { useContext } from 'react'
import {Context} from "./context/Context"
import DashboardRoutes from "./routes/Dashboard"
import LoginRoutes from './routes/Login'

import './App.css'
import DashboardLayout from './features'

function App() {
  const {token} = useContext(Context) 
  if(token){
    return <DashboardLayout>
      <DashboardRoutes/>
    </DashboardLayout>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App

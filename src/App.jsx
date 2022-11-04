
import './App.css'
import Counter from "./Components/Counter"
import {Route, Routes} from "react-router-dom"
import PageNotFound from "./Components/PageNotFound"
import { ErrorBoundary } from './Components/ErrorBoundary'




function App() {
  return(
    <div className ="container">
    <ErrorBoundary>
    <h1 className="app-header">Tolulope's React Counter App</h1>
     <Counter/>
     <Routes>
      <Route component={<PageNotFound/>}></Route>
     </Routes>
     </ErrorBoundary>
    </div>
  )

  
    

}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Files
import Home from "./components/home/allFiles/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Files
import Home from "../components/home/allFiles/index";
import ResgiterProducer from "../components/register-producer/form/index";
import RegisterConsumer from "../components/register-consumer/form/index";

export default function RoutesWay() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cadastro-produtor" element={ < ResgiterProducer /> } />
        <Route path="/cadastro-consumidor" element={ < RegisterConsumer /> } />
      </Routes>
    </Router>
  )
}

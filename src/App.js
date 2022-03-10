import { Login } from "../src/components/pages/Login/Login"
import { Register } from "./components/pages/Register/Register";
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;

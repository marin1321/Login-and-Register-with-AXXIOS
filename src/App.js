import {Form} from"../src/components/pages/form"
import {Register} from "../src/components/pages/register"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;

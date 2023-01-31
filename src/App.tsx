import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './API/Inicio'
function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
    
      </Routes> 


      </BrowserRouter>
      
    </div>
  );
}

export default App;

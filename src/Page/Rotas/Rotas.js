import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";
import Formulario1 from "../Formulario1/Formulario1"
import Formulario2 from "../Formulario2/Formulario2"
import formEnd from "../formEnd/FormEnd";

function Rotas(){

    return(

        <BrowserRouter>
        <Routes>
                <Route index element={<Login/>}/>
                <Route path = "home" element={<Home/>}/>
                <Route path = "formulario1" element={<Formulario1/>}/>
                <Route path = "formulario2" element={<Formulario2/>}/>
                <Route path = "formEnd" element={<formEnd/>}/>
        </Routes>  
        </BrowserRouter>
    )

}
export default Rotas
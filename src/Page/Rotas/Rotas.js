import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";
import Formulario1 from "../Formulario1/Formulario1"
import Formulario2 from "../Formulario2/Formulario2"
import FormEnd from "../FormEnd/FormEnd"
import Cadastro from "../cadastro/Cadastro"

function Rotas(){

    return(

        <BrowserRouter>
        <Routes>
                <Route index element={<Login/>}/>
                <Route path = "home" element={<Home/>}/>
                <Route path = "Cadastro" element={<Cadastro/>}/>
                <Route path = "formulario1" element={<Formulario1/>}/>
                <Route path = "formulario2" element={<Formulario2/>}/>
                <Route path = "FormEnd" element={<FormEnd/>}/>
        </Routes>  
        </BrowserRouter>
    )

}
export default Rotas
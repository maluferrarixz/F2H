import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";
import Formulario1 from "../Formulario1/Formulario1"
import Formulario2 from "../Formulario2/Formulario2"
import Cadastro from "../cadastro/Cadastro"
import FormEnd from "../../Page/FormEnd/FormEnd"
import Feed from "../Feed/Feed";
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import NewForm from "../../Page/NewForm/NewForm"
import SavePublication from "../SavePublication/SavePublication";

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
                <Route path = "Feed" element={<Feed/>}/>
                <Route path = "MenuFeed" element={<MenuFeed/>}/>
                <Route path = "NewForm" element={<NewForm/>}/>
                <Route path = "SavePublication" element={<SavePublication/>}/>
        </Routes>  
        </BrowserRouter>
    )

}
export default Rotas
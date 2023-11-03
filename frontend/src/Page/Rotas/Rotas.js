import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../Introduction/Home";
import Login from "../Login/Login";
import Formulario1 from "../Form1/Formulario1"
import Formulario2 from "../Form2/Formulario2"
import Cadastro from "../cadastro/Cadastro"
import FormEnd from "../../Page/formEnd/FormEnd"
import Feed from "../Feed/Feed";
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import NewForm from "../../Page/NewForm/NewForm"
import SavePublication from "../SavePublication/SavePublication";
import Profile from "../../Page/Profile/Profile"
import NewPublic from "../../Page/NewPublic/NewPublic"
import ConfigurationProfile from "../../Page/ConfigurationProfile/ConfigurationProfile"

function Rotas(){

    const PrivateRoutes = ({children, redirectTo}) => {
        const isAuthenticated = localStorage.getItem("@Auth:token") !== null;
        console.log('isAuth', isAuthenticated)
        return isAuthenticated ? children : <Navigate to={redirectTo}/>
      }
    
    return(

        <BrowserRouter>
        <Routes>
                <Route index element={<Login/>}/>
                {/* <Route path = "home" element={<Home/>}/> */}
                <Route path = "Cadastro" element={<Cadastro/>}/>
                <Route path = "formulario1" element={<Formulario1/>}/>
                <Route path = "formulario2" element={<Formulario2/>}/>
                <Route path = "FormEnd" element={<FormEnd/>}/>
                <Route path = "Feed" element={<Feed/>}/>
                <Route path = "MenuFeed" element={<MenuFeed/>}/>
                <Route path = "NewForm" element={<NewForm/>}/>
                <Route path = "SavePublication" element={<SavePublication/>}/>
                <Route path = "Profile" element={<Profile/>}/>
                <Route path = "NewPublic" element={<NewPublic/>}/>
                <Route path = "ConfigurationProfile" element={<ConfigurationProfile/>}/>
                <Route path="home" element={<PrivateRoutes redirectTo='/'><Home/></PrivateRoutes>}/>
        </Routes>  
        </BrowserRouter>
    )

}
export default Rotas
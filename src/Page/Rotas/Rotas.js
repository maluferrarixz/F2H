import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";


function Rotas(){

    return(

        <BrowserRouter>
        <Routes>
                <Route index element={<Login/>}/>
                <Route path = "home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )

}
export default Rotas
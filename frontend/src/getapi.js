import axios from "axios"
import { useEffect, useState } from "react"

const Card = () =>{


    const[array, setArray] = useState([])
    const pegarPost = () =>{


        axios 
        .get('https://forum-backend-3zv0.onrender.com/post/all')
        .then((response) =>{
            setArray(response.data)
        })
        .catch((error) =>{
            return(error.response)
        })
    }
}

useEffect(() =>{
    pegarPost()
}, [])

return(
    <>
    {
        array && array.map((dado)=>{


            return(
                <>{dado.creator_username}</>
            )
        })
    }
    </>
)
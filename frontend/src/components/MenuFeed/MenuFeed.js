import {NewFormImgButtonFooter, NewFormButtonFooter, ProfileButtonImgFooter,  ProfileButtonFooter,  PublicButtonFooter, PublicButtonImgFooter,  FooterMenuFeed, FormButtonFooter, FormButtonImgFooter } from "./styled"
import FormHomeFeed from "../../Assets/HomeFeedMenu.png"
import PublicIconFeed from "../../Assets/AddPublicFooter.png"
import ProfileIconFeed from "../../Assets/ProfileFeed.png"
import { Link } from 'react-router-dom';
import newForm from "../../Assets/FormImage.png"

function MenuFeed(){

    return(

        <>
        <FooterMenuFeed>
        <FormButtonFooter>  
        <Link to ="/Feed">          
        <FormButtonImgFooter src={FormHomeFeed}/>   
        </Link>
        </FormButtonFooter>
        <PublicButtonFooter>
        <Link to ="/NewPublic">
        <PublicButtonImgFooter src={PublicIconFeed}/>
        </Link>
        </PublicButtonFooter>
        <ProfileButtonFooter>
        <Link to ="/Profile">
        <ProfileButtonImgFooter src={ProfileIconFeed}/>
        </Link>
        </ProfileButtonFooter>
        <NewFormButtonFooter>        
        <Link to ="/NewForm">          
        <NewFormImgButtonFooter src={newForm}/>        
        </Link>
        </NewFormButtonFooter>
        </FooterMenuFeed>
        </>
    )
}

export default MenuFeed
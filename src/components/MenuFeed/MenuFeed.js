import {ProfileButtonImgFooter,  ProfileButtonFooter, PublicButtonTextFooter, PublicButtonFooter, PublicButtonImgFooter,  FooterMenuFeed, FormButtonFooter, FormButtonImgFooter } from "./styled"
import FormHomeFeed from "../../Assets/HomeFeedMenu.png"
import PublicIconFeed from "../../Assets/PublicIconFeed.png"
import ProfileIconFeed from "../../Assets/me.png"


function MenuFeed(){

    return(

        <>
        <FooterMenuFeed>
        <FormButtonFooter>
        <FormButtonImgFooter src={FormHomeFeed}/>
        </FormButtonFooter>
        <PublicButtonFooter>
        <PublicButtonImgFooter src={PublicIconFeed}/>
        <PublicButtonTextFooter>
            +
        </PublicButtonTextFooter>
        </PublicButtonFooter>
        <ProfileButtonFooter>
        <ProfileButtonImgFooter src={ProfileIconFeed}/>
        </ProfileButtonFooter>
        </FooterMenuFeed>
        </>
    )
}

export default MenuFeed
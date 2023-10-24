import { TextProfile, TittleProfile, ProfileSection, ImgProfile, ImgDivProfile } from "./styled"
import ProfileImg from "../../Assets/ProfileImgCard.jpg"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import CardFeed from "../../components/CardFeed/CardFeed"
import SignOut from "../../components/Signout/SignOut"

function Profile() {

    return (
        <>

            <ProfileSection>
                <SignOut/>
                <ImgDivProfile>
                    <ImgProfile src={ProfileImg} />
                </ImgDivProfile>
                <TittleProfile>
                    @Maria Luiza Ferrari
                </TittleProfile>
                <TextProfile>
                    Oii, sou a Malu amo dançar e cantar!!
                </TextProfile>
                <CardFeed />
                <CardFeed />
                <CardFeed />
            </ProfileSection>
            <MenuFeed />
        </>
    )
}
export default Profile
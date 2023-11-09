import { TextProfile, TittleProfile, ProfileSection, ImgProfile, ImgDivProfile } from "./styled"
import ProfileImg from "../../Assets/ProfileImgCard.jpg"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import CardFeed from "../../components/CardFeed/CardFeed"
import SignOut from "../../components/Signout/SignOut"
import { useState, useEffect } from "react";
import { api } from "../../services/api";


function Profile() {
    const [nome, setNome] = useState();
    const [userData, setUserdata] = useState({});
    const id = localStorage.getItem("id");


    const fetchData = async () => {
        const id = localStorage.getItem('id');
        //alert(id);
        if (id) {
          try {
            const response = await api.get('/user/' + id);
            console.log(response);
            
            setUserdata(response.data.data[0]);
            console.log('aaaaaaaaaaaaaaa', userData);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
    
        }
      }
      useEffect(() => {
        fetchData();
      }, []);


    return (
        <>
            <ProfileSection>
                <SignOut/>
                <ImgDivProfile>
                    <ImgProfile src={ProfileImg} />
                </ImgDivProfile>
                <TittleProfile                    
                nome={userData.nome}>@
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
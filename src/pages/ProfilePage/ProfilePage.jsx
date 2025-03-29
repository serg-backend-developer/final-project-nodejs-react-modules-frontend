import MainTitle from "../../components/MainTitle/MainTitle";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Subtitle from "../../components/Subtitle/Subtitle";

import style from "./ProfilePage.module.css";
import { useParams } from "react-router-dom";
import UserTabs from "../../components/UserTabs/UserTabs";

const ProfilePage = () => {
  const { id } = useParams();
  return (
    <section className={style["profile-section"]}>
      <div className="container">
        <MainTitle>Profile</MainTitle>
        <Subtitle>
          Reveal your culinary art, share your favorite recipe and create <br />
          gastronomic masterpieces with us.
        </Subtitle>
        <div className={style.content}>
          <div className={style.profileInfo}>
            <ProfileInfo />
          </div>
          <div className={style.profileData}>
            <UserTabs userId={id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;

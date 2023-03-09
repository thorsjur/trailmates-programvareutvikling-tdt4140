import { Button } from "../Button/Button";
import Edit from "../assets/Edit.svg";
import Remove from "../assets/Trashcan.svg";
import "./TripAuthor.css";
import { useNavigate } from "react-router-dom";

interface Props {
  author: string;
  trips: number;
  profilePic: string;
  authorUID: string;
}

export const TripAuthor = ({ author, trips, profilePic, authorUID }: Props) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${authorUID}`);
  };

  return (
    <div className="trippage-profile-container flex-row">
      <div className="trippage-profile-left flex-column">
        <h2>SKREVET AV</h2>
        <img src={profilePic} alt="" id="trippage-profile" />
        <h3>{author}</h3>
        <p>{trips} reiser</p>
        <Button
          text={"Vis profil"}
          styling={"accent-outline"}
          width={"70%"}
          height={"3vh"}
          onClick={handleProfileClick}
        ></Button>
      </div>
      <div className="flex-column trippage-profile-buttons">
        <img src={Edit} alt="" />
        <img src={Remove} alt="" />
      </div>
    </div>
  );
};

import "./ReviewBox.css";

import { title } from "process";
import internal from "stream";
import star from "../../components/assets/Star.svg";
import { useEffect, useState } from "react";
import { getUserData, UserData } from "../../authentication/firestore";
import { getUserTripsCount } from "../../trips/access";
import { getImgUrl } from "../../storage/util/methods";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  content: string;
  authorUid: string;
  rating: string;
}

export const ReviewBox = ({ content, title, rating, authorUid }: Props) => {
  const [authorInfo, setAuthorInfo] = useState<UserData | undefined>(undefined);
  const [tripCount, setTripCount] = useState<number>(0);
  const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData(authorUid).then((user) => setAuthorInfo(user));
    getUserTripsCount(authorUid).then((num) => setTripCount(num));
    getImgUrl(`profilepics/${authorUid}`).then(setProfilePicUrl);
  }, [authorUid]);

  const onProfilePicClick = () => {
    navigate(`/profile/${authorUid}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="reviewer-container flex-row">
      <div className="review-author flex-column">
        <img src={profilePicUrl} alt="" onClick={onProfilePicClick} />
        <h3 onClick={onProfilePicClick}>{authorInfo?.name}</h3>
        <h5>{tripCount} reiser!</h5>
      </div>

      <div className="reviewe-contain-container flex-column">
        <div className="review-heading flex-row">
          <h2>{title}</h2>
          <div className="review-rating flex-row">
            <h3>Rating: {rating}</h3>
            <img src={star} alt="" />
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

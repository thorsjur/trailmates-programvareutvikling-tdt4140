import "./PublicProfile.css";
import profilepic from "../../components/assets/profilepic.png";
import wavebg from "../../components/assets/wavebg.svg";
import { User } from "../../types/user";
import { Button } from "../../components/Button/Button";
import { TripSection } from "../../components/TripSection/TripSection";
import { TitleSeperator } from "../../components/TitleSeperator/TitleSeperator";

const obj: User = {
  _id: 1,
  name: "Jane Doe",
  age: 22,
  country: "Trondheim, Norge",
  mail: "janedoe@stud.ntnu.no",
  phone: 98549462,
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
};

const fname: string = obj.name.split(" ")[0];

export const PublicProfile = () => {
  return (
    <div className="container-public-profile">
      <div className="flex-row m5">
        <div className="container-public-userinfo flex-column">
          <div
            className="public-profile-img"
            style={{ backgroundImage: `url(${profilepic})` }}
          />
          <h1>{obj.name}</h1>
          <div className="container-public-userinfo-sub">
            <p>Lives in: {obj.country}</p>
            <p>{obj.age} years of age</p>
            <p>
              Travelled <b>11</b> times!
            </p>
          </div>
        </div>
        <div className="container-public-aboutme flex-column">
          <h2>Hello,</h2>
          <div className="container-public-aboutme-sub">
            <h2>My name is {fname}!</h2>
            <p>{obj.aboutme}</p>
          </div>
        </div>
      </div>
      <div
        className="container-public-user-trips"
        style={{ backgroundImage: `url(${wavebg})` }}
      >
        <div className="title-container-public-usertrips flex-column">
          <h2>{fname}'s Trips!</h2>
          <TitleSeperator height="5px" width="25vw" color="accent" />
        </div>
        <TripSection text="" />
      </div>
      <div className="container-public-user-reviews flex-column">
        <h2>{fname}'s Reviews</h2>
        <TitleSeperator height="5px" width="25vw" color="accent" />
      </div>
    </div>
  );
};

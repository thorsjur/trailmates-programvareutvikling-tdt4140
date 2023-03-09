import { useState } from "react";
import { ReactComponent as FilledHeart } from "../../resources/media/heart-filled-icon.svg";
import { ReactComponent as Arrow } from "../../components/assets/card-arrow.svg";
import "./TripCard.css";
import Trip from "../../trips/trip";
import { NavLink } from "react-router-dom";

interface Props {
  trip: Trip;
  color: "black" | "white";
}

export const TripCard = ({ trip, color }: Props) => {
  // TODO: Check if the logged in user has liked this trip already.
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // TODO: link a backend call to save the liked status.
    setLiked(!liked);
  };

  return (
    <div className="card-container">
      <div
        className="card-image"
        //style={{}}
      >
        <div className="container-card-readmore flex-column">
          <FilledHeart
            className={`heart ${liked && "filled"}`}
            onClick={handleClick}
          />
          <div className="card-readmore-text">
            <NavLink
              style={{ textDecoration: "none" }}
              className="flex-row"
              end
              to={"/reiserute/" + trip.tripId}
            >
              Les mer
              <Arrow className="card-readmore-arrow" />
            </NavLink>
            <div className="card-readmore-underline"></div>
          </div>
        </div>
      </div>
      <div className={color}>
        <h3>{trip.startDestination}</h3>
        <h4>{trip.countries[0]}</h4>
        <h5>Vurdering: {trip.averageRating}/5</h5>
        <h5>Estimert kostnad: {trip.price} NOK</h5>
      </div>
    </div>
  );
};

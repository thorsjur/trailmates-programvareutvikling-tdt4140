import { useContext, useState, useEffect } from "react";
import "./Favorites.css";
import { UserContext } from "../../authentication/UserProvider";
import { Navigate } from "react-router-dom";
import { TripCollection } from "../../components/TripCollection/TripCollection";
import { Trip } from "../../trips/trip";
import { getFavorites } from "../../trips/favorites";
import { filterTripsByFieldEquality } from "../../trips/utils";

export const Favorites = () => {
  const { currentUser } = useContext(UserContext);
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    if (currentUser) {
      getFavorites(currentUser.userUid).then((trips) => {
        const userTrips = filterTripsByFieldEquality(
          trips,
          "posterUid",
          currentUser.userUid,
        );
        setTrips(userTrips);
      });
    }
  }, [currentUser]);

  if (!currentUser) return <Navigate to="/" />;

  return (
    <div className="favorite">
      <TripCollection trips={trips} />
    </div>
  );
};

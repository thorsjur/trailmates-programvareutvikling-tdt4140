import { get, post, put } from "../utils/fetchMethods";

export default interface Trip {
  tripId: string;
  startDestination: string;
  endDestination: string;
  countries: string[];
  postDate: string;
  posterUID: string;
  price: number;
  tripDurationDays: number;
  description: string;
  degreesCelcius: number;
  tripLengthKm: number;
  attractions: string[];
  imageURLs: string[];
  averageRating: number;
}

export const getTrips = (): Promise<Trip[]> => get("trips/");

export const getTripById = (tripId: string): Promise<Trip> =>
  get("trips/" + tripId);

export const putTrip = (trip: Trip) => put("trips/", trip);

export const postTrip = (trip: Trip) => post("trips/", trip);

import { get, post, put } from "../utils/fetchMethods";

// Keep up to date with backend
export interface TripData {
  startCity: string;
  destinationCity: string;
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
}

export default interface Trip extends TripData {
  tripId: string;
  averageRating: number;
}

export const getTrips = (): Promise<Trip[]> => get("trips/");

export const getTripById = (tripId: string): Promise<Trip> =>
  get("trips/" + tripId);

export const putTrip = (trip: Trip) => put("trips/", trip);

export const postTrip = (trip: TripData) => post("trips/", trip);

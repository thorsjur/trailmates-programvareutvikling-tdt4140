import { get, post, put } from "../utils/fetchMethods";

// Keep up to date with backend
export interface TripSubmission {
  startCity: string;
  destinationCity: string;
  countries: string[];
  posterUID: string;
  price: number;
  tripDurationDays: number;
  description: string;
  degreesCelcius: number;
  tripLengthKm: number;
  attractions: string[];
  imageURLs: string[];
}

export default interface Trip extends TripSubmission {
  tripId: string;
  averageRating: number;
  postDate: string;
}

export const getTrips = (): Promise<Trip[]> => get("trips/");

export const getTripById = (tripId: string): Promise<Trip> =>
  get("trips/" + tripId);

export const putTrip = (tripId: string, trip: TripSubmission) => {
  put("trips/" + tripId, trip);
};

export const postTrip = (trip: TripSubmission): Promise<Trip> =>
  post("trips/", trip);

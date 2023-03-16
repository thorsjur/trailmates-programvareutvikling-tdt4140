import { Trip, TripSubmission } from "./trip";
import { get, post, put, del } from "../utils/fetchMethods";

export const getFavorites = (userUid: string) =>
  get(`trips/favorites/${userUid}`);

export const addFavorite = (userUid: string, tripId: string) =>
  put(`trips/favorites/${userUid}/${tripId}`, {});

export const removeFavorite = (userUid: string, tripId: string) =>
  del(`trips/favorites/${userUid}/${tripId}`);

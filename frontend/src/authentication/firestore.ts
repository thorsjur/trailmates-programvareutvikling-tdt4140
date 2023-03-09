import { get, put } from "../utils/fetchMethods";

export interface UserData {
  name: string;
  userType: string;
  nationality?: string;
  placeOfResidence?: string;
  aboutUser?: string;
  age?: number;
  phoneNumber?: string;
}

export const getUserData: (userUid: string) => Promise<UserData> = (
  userUid: string,
) => {
  return get("user/" + userUid);
};

export const putUserData = (userUid: string, userData: UserData) => {
  return put("user/" + userUid, userData);
};

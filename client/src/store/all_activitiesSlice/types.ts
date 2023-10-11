import { LocationLCFormType } from "../locationLCSlice/types";
import { IUser } from '../userSlice/types';

export type ActivityType = {
  id?: number;
  user_id?: number | '';
  activity_type?: string;
  activity_date?: string;
  activity_time?: string;
  activity_message?: string;
  location_id?: number | '';
  Location?: LocationLCFormType,
  User?: IUser,
  Subscribers: SubscriberType[]
};

export type SubscriberType = {
  id?: number;
  activity_id?: number;
  user_id?: number;
  status?: string;
  User?: IUser
}
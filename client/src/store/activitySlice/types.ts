export type ActivityType = {
  id?: number;
  user_id?: number | '';
  activity_type: string;
  activity_date: string;
  activity_time: string;
  activity_message: string;
  location_id: number | '';
};
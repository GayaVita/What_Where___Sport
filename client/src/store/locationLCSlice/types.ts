export type LocationLCFormType = {
  id?: number;
  admin_id?: number;
  location_title?: string;
  location_address: string;
  location_district: string;
  location_price?: number | '';
  location_photo?: string;
  location_category?: string;
  location_contact?: string;
  user_id_loc?: number | '';
  coordinateX: string;
  coordinateY: string;
};
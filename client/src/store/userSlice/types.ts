import { ProfileFormType } from "../profileSlice/types";

export interface IUser {
    id?:number;
    login?: string;
    email?: string;
    password?: string;
    Profile?: ProfileFormType
  }
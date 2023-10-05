import { Dispatch, SetStateAction } from "react";

export interface IInput {
  login?: string;
  email?: string;
  password?: string;
}

export interface ILogin {
  login: string;
}


export interface IPropsLogin {
  user: ILogin;
}

export interface IRegProps {
  setUser: Dispatch<SetStateAction<ILogin>>

}
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUser } from './types';

interface ValidationErrors {
  message: string;
}

// Асинхронный запрос на регистрацию
export const fetchUserRegister = createAsyncThunk<
IUser,
IUser,
  { rejectValue: ValidationErrors }
>('user/fetchUserRegister', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post<IUser>('http://localhost:3000/user/registration', formData);
    return response.data as IUser;
  } catch (err) {
    const error: AxiosError<ValidationErrors> =
      err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// Асинхронный запрос на авторизацию
export const fetchUserLogin = createAsyncThunk<
IUser,
IUser,
  { rejectValue: ValidationErrors }
>('user/fetchUserLogin', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post<IUser>('/user/login', formData);
    return response.data as IUser;
  } catch (err) {
    const error: AxiosError<ValidationErrors> =
      err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// Асинхронный запрос на LOGOUT
export const fetchUserLogout = createAsyncThunk<void>(
  'user/fetchUserLogout',
  async () => {
    try {
      await axios('/user/logout');
    } catch (err) {
     console.log(err)
    }
  },
);

// Асинхронный запрос на проверку юзера, нужен для сохранения юзера после обновления страницы(иначе будет слетать на фронте)
export const checkAuth = createAsyncThunk<IUser, { rejectValue: ValidationErrors }>('user/checkAuth', async (_, { rejectWithValue }) => {
    try {
      const response = await axios<IUser>('/user/checkAuth');
      return response.data;
    } catch (err) {
      const error: AxiosError<ValidationErrors> =
      err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
    }
  });
  
  
  // опционально (для добавления аватара для пользователя с помощью мультера)
  export const fetchUserUpdate = createAsyncThunk(
    'user/fetchUserUpdate',
    async (params: IUser) => {
      try {
        const { id, avatar } = params;
        const response = await axios.put(
          `/user/${id}`,
          { avatar },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  );
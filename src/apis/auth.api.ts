import axiosClient from '@/apis/axios-client';
import { LoginResponse } from '@/shared/ts/interface/auth.interface';
import { AccountResponse } from '@/shared/ts/interface/users.interface';

export const authApi = {
  login(params: AccountResponse): Promise<LoginResponse> {
    const url = '/auth/login';
    return axiosClient.post(url, params);
  },
};

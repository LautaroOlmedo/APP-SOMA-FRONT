import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from '../base.api';
import { LOGIN } from '../endpoints';

type Options = Omit<UseMutationOptions<AxiosResponse<any, any>, AxiosError, { username: string; password: string; }, unknown>, 'mutationKey' | 'mutationFn'>

const postLogin = async ({ username, password }: { username: string, password: string}) => await axiosInstance.post(LOGIN, { username, password })

export const useLogin = (options?: Options) => {
    return useMutation<AxiosResponse<any, any>, AxiosError, { username: string; password: string; }>(
        ['useLogin'],
        postLogin, 
        {
            ...options,
            retry:0
        }         
    );
};
  

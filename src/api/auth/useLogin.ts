import { useMutation } from '@tanstack/react-query';
// import { useMutation, UseMutationOptions } from '@tanstack/react-query';
// import { AxiosError, AxiosResponse } from 'axios';
// import { axiosInstance } from '../base.api';
// import { LOGIN } from '../endpoints';

interface IUserData {
    id: string;
    createdAt: string;
    updatedAt: string;
    firstname: string;
    lastname: string;
    age: number;
    username: string;
    dni: string;
    role: string;
    active: boolean;
  }
  
interface ILoginData {
    accessToken: string;
    user: IUserData;
}

// type Options = Omit<UseMutationOptions<AxiosResponse<any, any>, AxiosError, { username: string; password: string; }, unknown>, 'mutationKey' | 'mutationFn'>

// const postLogin = async ({ username, password }: { username: string, password: string}) => await axiosInstance.post(LOGIN, { username, password })

function simulatePostWithTimeout(): Promise<ILoginData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const simulatedResponse: ILoginData = {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6ImQ4MjJjYmNmLTlmZGItNGE0MC05ODY1LTNhYmRkYWMzMTBmYiIsImlhdCI6MTY5ODk2NDY0NiwiZXhwIjoxNjk4OTY4MjQ2fQ.KqwaTvRE3MDhHeuwO8f6DYt3E91YmOJheN9ijZUO-EE',
                user: {
                    id: 'd822cbcf-9fdb-4a40-9865-3abddac310fb',
                    createdAt: '2023-10-28T19:14:58.597Z',
                    updatedAt: '2023-10-28T19:14:58.597Z',
                    firstname: 'Lautaro',
                    lastname: 'Olmedo',
                    age: 24,
                    username: 'chasx',
                    dni: '42509723',
                    role: 'USER',
                    active: true,
                },
            };
            resolve(simulatedResponse);
        }, 2000); 
    });
}

// export const useLogin = (options?: Options) => {
//     return useMutation<AxiosResponse<any, any>, AxiosError, { username: string; password: string; }>(
//         ['useLogin'],
//         postLogin, 
//         {
//             ...options,
//             retry:0
//         }         
//     );
// };

export const useLogin = () => {
    return useMutation<ILoginData, unknown, { username: string; password: string; }>(
        ['useLogin'],
        simulatePostWithTimeout
    );
};
  

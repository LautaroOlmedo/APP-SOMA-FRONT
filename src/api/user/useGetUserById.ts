// import { useQuery } from '@tanstack/react-query';
import { useQuery, QueryKey, useMutation } from '@tanstack/react-query'
import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { IUser } from './../../interfaces/user.interface';
import { axiosInstance } from '../base.api'
import { GET_USER_BYID } from '../endpoints'


type Options = Omit<UseQueryOptions<AxiosResponse<IUser, any>, AxiosError<unknown, any>, IUser, QueryKey>, 'queryFn' | 'queryKey'>

const getUserById = async (id: string) => await axiosInstance.get(`${GET_USER_BYID}/${id}`) as AxiosResponse<IUser>

export const useGetUserById = (id: string, options?: Options) => useQuery<AxiosResponse<IUser>, AxiosError, IUser>(
    ['getUserById', id],
    async () => await getUserById(id), 
    {
        ...options,
        select: data => data.data
    }
)


function simulatePostWithTimeout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const simulatedResponse = {
                "id": "505104c5-f36a-4f0a-b344-1aff5db7731c",
                "createdAt": "2023-10-27T22:49:02.780Z",
                "updatedAt": "2023-10-27T22:49:02.780Z",
                "firstname": "Sandro",
                "lastname": "lalala",
                "age": 24,
                "username": "miguel",
                "dni": "52509789",
                "role": "USER",
                "active": true,
                "brand": {
                    "id": "0dc52404-2072-4458-8abd-d840aa0df54e",
                    "createdAt": "2023-06-05T18:26:45.304Z",
                    "updatedAt": "2023-06-05T18:26:45.304Z",
                    "brandName": "RIP CURL",
                    "webSite": "www.ripcurl.com.ar",
                    "image": "data:image/png;base64,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"
                },
                "storesIncludes": [
                    {
                        "id": "b142aad2-8d34-4fc1-ae80-375259af4269",
                        "createdAt": "2023-10-28T18:55:48.125Z",
                        "updatedAt": "2023-10-28T18:55:48.125Z",
                        "accesLevel": "ADVANCED",
                        "store": {
                            "id": "21afb764-ec1e-4adc-9e96-5b8decda0ace",
                            "createdAt": "2023-10-28T18:54:30.813Z",
                            "updatedAt": "2023-10-28T18:54:30.813Z",
                            "storeName": "Rip CUrl RIvadavia"
                        }
                    }
                ]
            }
            resolve(simulatedResponse );
        }, 500); 
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

// export const useUserData = () => {
//     return useQuery<any, unknown, any>(
//         ['useUserDate'],
//         simulatePostWithTimeout
//     );
// };
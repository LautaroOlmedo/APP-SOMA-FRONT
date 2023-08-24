import { useQuery, QueryKey } from '@tanstack/react-query'
import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { IUser } from './../../interfaces/user.interface';
import { axiosInstance } from '../base.api'
import { GET_ALL_USERS } from '../endpoints'


type Options = Omit<UseQueryOptions<AxiosResponse<IUser, any>, AxiosError<unknown, any>, IUser, QueryKey>, 'queryFn' | 'queryKey'>

const getUserById = async (id: string) => await axiosInstance.get(`${GET_ALL_USERS}/${id}`) as AxiosResponse<IUser>

export const useGetUserById = (id: string, options?: Options) => useQuery<AxiosResponse<IUser>, AxiosError, IUser>(
    ['getUserById', id],
    async () => await getUserById(id), 
    {
        ...options,
        select: data => data.data
    }
)
import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { IUser } from '../../interfaces/user.interface'
import { axiosInstance } from '../base.api'
import { GET_ALL_USERS } from '../endpoints'

type Options = Omit<UseQueryOptions<AxiosResponse<IUser[], any>, AxiosError<unknown, any>, IUser[], QueryKey>, 'queryFn' | 'queryKey'>

const getUsers = async () => await axiosInstance.get(GET_ALL_USERS) as AxiosResponse<IUser[]>

export const useGetAllUsers = (options?: Options) => useQuery<AxiosResponse<IUser[]>, AxiosError, IUser[]>(
    ['getAllUsers'], 
    async () => await getUsers(),
    {
        ...options,
        select: data => data.data
    }
)

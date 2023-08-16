import { useQuery } from '@tanstack/react-query'
import { UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { IBrand } from '../../interfaces/brand.interface'
import { axiosInstance } from '../base.api'
import { GET_ALL_BRANDS } from '../endpoints'

type Options = Omit<UseQueryOptions<AxiosResponse<IBrand, any>, AxiosError<unknown, any>, IBrand, QueryKey>, 'queryFn' | 'queryKey'>

const getBrandById = async (id: string) => await axiosInstance.get(`${GET_ALL_BRANDS}/${id}`) as AxiosResponse<IBrand>

export const useGetBrandById = (id: string, options?: Options) => useQuery<AxiosResponse<IBrand>, AxiosError, IBrand>(
    ['getBrandById', id], 
    () => getBrandById(id), 
    {
        ...options,
        select: data => data.data
    }
)
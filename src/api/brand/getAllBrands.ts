import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { IBrand } from '../../interfaces/brand.interface'
import { axiosInstance } from '../base.api'
import { GET_ALL_BRANDS } from '../endpoints'

type Options = Omit<UseQueryOptions<AxiosResponse<IBrand[], any>, AxiosError<unknown, any>, IBrand[], QueryKey>, 'queryFn' | 'queryKey'>

const getBrands = async () => await axiosInstance.get(GET_ALL_BRANDS) as AxiosResponse<IBrand[]>

export const useGetAllBrands = (options?: Options) => useQuery<AxiosResponse<IBrand[]>, AxiosError, IBrand[]>(
    ['getAllBrands'], 
    getBrands,
    {
        ...options,
        select: data => data.data
    }
)
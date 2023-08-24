import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios';
import { IProduct } from './../../interfaces/product.interface';
import { axiosInstance } from '../base.api'
import { GET_ALL_PRODUCTS } from '../endpoints'

type Options = Omit<UseQueryOptions<AxiosResponse<IProduct[], any>, AxiosError<unknown, any>, IProduct[], QueryKey>, 'queryFn' | 'queryKey'>

const getProducts = async () => await axiosInstance.get(GET_ALL_PRODUCTS) as AxiosResponse<IProduct[]>

export const useGetAllProducts = (options?: Options) => useQuery<AxiosResponse<IProduct[]>, AxiosError, IProduct[]>(
    ['getAllProducts'], 
    getProducts,
    {
        ...options,
        select: data => data.data
    }
)
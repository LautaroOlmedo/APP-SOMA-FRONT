import { useQuery, QueryKey } from '@tanstack/react-query'
import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { IProduct } from './../../interfaces/product.interface';
import { axiosInstance } from '../base.api'
import { GET_ALL_PRODUCTS } from '../endpoints'

type Options = Omit<UseQueryOptions<AxiosResponse<IProduct, any>, AxiosError<unknown, any>, IProduct, QueryKey>, 'queryFn' | 'queryKey'>

const getProductById = async (id: string) => await axiosInstance.get(`${GET_ALL_PRODUCTS}/${id}`) as AxiosResponse<IProduct>

export const useGetProductById = (id: string, options?: Options ) => useQuery<AxiosResponse<IProduct>, AxiosError, IProduct>(
    ['getProductById', id],
    async () => await getProductById(id), 
    {
        ...options,
        select: data => data.data
    }
)
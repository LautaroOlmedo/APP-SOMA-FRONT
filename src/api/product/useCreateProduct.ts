import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { IProduct } from './../../interfaces/product.interface';
import { axiosInstance } from '../base.api';
import { CREATE_PRODUCT } from '../endpoints';

type Options = Omit<UseMutationOptions<AxiosResponse<any, any>, AxiosError, IProduct, unknown>, 'mutationKey' | 'mutationFn'>

const createProduct = (product: IProduct) => axiosInstance.post(CREATE_PRODUCT, product)

export const useCreateProduct = (options?: Options) => useMutation<AxiosResponse<any, any>, AxiosError, IProduct>(
    ['createProduct'],
    createProduct, 
    {
        ...options,
        retry: 0 
    }
)
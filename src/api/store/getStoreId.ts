import { useQuery } from '@tanstack/react-query';
import { UseQueryOptions, QueryKey } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { IBrand } from '../../interfaces/brand.interface';
import { axiosInstance } from '../base.api';
import { GET_ONE_STORES } from '../endpoints';
import { StoreType } from '../../interfaces/store.interface';

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<StoreType>,
    AxiosError<unknown, any>,
    AxiosResponse<StoreType, any>,
    QueryKey
  >,
  'queryFn' | 'queryKey'
>;

const getStoreId = async (id: string) =>
  await axiosInstance.get(`${GET_ONE_STORES}/${id}`);

  export const useGetStoreId = (
	id: string,
	options?: Options
  ) =>
	useQuery<AxiosResponse<StoreType>, AxiosError>(
	  ['getStoreId', id],
	  () => getStoreId(id),
	  {
		...options,
		select: (response) => response,
	  }
	);
  

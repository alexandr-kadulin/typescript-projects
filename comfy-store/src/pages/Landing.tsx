import { Hero, FeaturedProducts } from '@/components';
import { customFetch, type ProductsResponse } from '@/utils';
import { useLoaderData, type LoaderFunction } from 'react-router-dom';

const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);

  return { ...response.data };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;

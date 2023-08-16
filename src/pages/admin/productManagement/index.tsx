import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllProducts } from '../../../api/product/useGetAllProducts';
import { ProductCartComponent } from '../../../components/ProductCardComponent';

const ProductsManagementPage = () => {
    const allProducts = useGetAllProducts()

    if(allProducts.isLoading) return <>CARGANDO...</>

    if(allProducts.isError) return <>ERROR</>

    if(allProducts.data.length === 0) return <>No hay resultados</>

    return (
        <div>
            <div>
                <div>ADMINISTRAR Productos</div>
                <Link to={'/admin/panel/products/registar'}>
                    <button type="button">Crear Producto</button>
                </Link>
                <br />
                <br />
                <br />
                <div>
                    {
                        allProducts.data.map(p => (
                            <ProductCartComponent
                                key={p.id}
                                id={p.id}
                                productName={p.productName}
                                description={p.description}
                                price={p.price}
                                size={p.size}
                                talle={p.talle}
                                code={p.code}
                                category={p.category}
                                createdAt={p.createdAt}
                                updatedAt={p.updatedAt}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsManagementPage

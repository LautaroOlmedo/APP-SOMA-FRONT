import React from 'react';
import { useGetAllProducts } from '../../api/product/useGetAllProducts';
import { ProductCartComponent } from '../../components/ProductCardComponent'; 

const ProductsPage = () => {
    const products = useGetAllProducts()

    if(products.isLoading) return <>CARGANDO...</>

    if(products.isError) return <>ERROR</>

    if(products.data.length === 0) return <>No hay resultados</>

    return (
        <div>
            {/* <Sidebar /> */}
            <br />
            <br />
            <br />
            <div>
                { products.data.map(p => (
                    <ProductCartComponent // Ajusta el nombre del componente
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
                ))}
            </div>
        </div>
    );
};

export default ProductsPage

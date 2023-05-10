import React from "react";
import { ProductType } from "../home/interfaces/product.interface";
import { products } from "../../api/products.api";
import { ProductCartComponent } from "../../components/ProductCardComponent";

export const ProductsPage: React.FC<{}> = () => {
  const [allProducts, setAllProducts] = React.useState<ProductType[] | null>(
    null
  );
  React.useEffect(() => {
    products
      .getAll()
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div>ADMINISTRAR MARCAS</div>
      <br />
      <br />
      <br />
      <div>
        {allProducts?.length !== 0 ? (
          allProducts?.map((p) => (
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
        ) : (
          <div>No hay resultados</div>
        )}
      </div>
    </div>
  );
};

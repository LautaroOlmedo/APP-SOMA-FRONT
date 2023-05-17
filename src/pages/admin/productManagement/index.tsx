import React from "react";
import { ProductType } from "../../home/interfaces/product.interface";
import { products } from "../../../api/products.api";
import { ProductCartComponent } from "../../../components/ProductCardComponent";
import { Link } from "react-router-dom";

export const ProductsManagementPage: React.FC<{}> = () => {
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
  }, []);
  console.log("products: ", allProducts);

  return (
    <div>
      <div>
        <div>ADMINISTRAR Productos</div>
        <Link to={"/admin/panel/products/registar"}>
          <button type="button">Crear Producto</button>
        </Link>
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
    </div>
  );
};

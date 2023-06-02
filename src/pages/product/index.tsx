import React, { useEffect } from "react";
import { ProductType } from "../home/interfaces/product.interface";
import { products } from "../../api/products.api";
import { ProductCartComponent } from "../../components/ProductCardComponent"; // Ajusta el nombre del componente
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction } from "../../redux/actions/products.actions";
import { RootState } from "../../redux/store";
// import Sidebar from "../../components/Sidebar"; // Ajusta la ruta del componente Sidebar

export const ProductsPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAction() as any);
  }, [dispatch]);

  const selectIsOn = (state: RootState) => state.prodcutReducer;
  const product = useSelector(selectIsOn);
  let allProducts = product.products;
  console.log(allProducts);

  return (
    <div>
      {/* <Sidebar /> */}

      <br />
      <br />
      <br />
      <div>
        {allProducts?.length !== 0 ? (
          allProducts?.map((p: ProductType) => (
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
          ))
        ) : (
          <div>No hay resultados</div>
        )}
      </div>
    </div>
  );
};

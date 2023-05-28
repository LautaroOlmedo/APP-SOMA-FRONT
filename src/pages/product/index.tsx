import React, { useEffect } from "react";
import { ProductType } from "../home/interfaces/product.interface";
import { products } from "../../api/products.api";
import { ProductCartComponent } from "../../components/ProductCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction } from "../../redux/actions/products.actions";
import { RootState } from "../../redux/store";

export const ProductsPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAction() as any);
  }, [dispatch]);

  const selectIsOn = (state: RootState) => state.prodcutReducer;

  const product = useSelector(selectIsOn);
  let allProducts = product.products;
  console.log(allProducts);

  // const productss = useSelector<any>((state) => state.productsSlice);
  // const productsss = useSelector<IRootState, ProductType>(
  //   (state) => state.product
  // );

  // if (loading) {
  //   return <div>Cargando usuarios...</div>;
  // }

  // if (error) {
  //   return <div>Ha ocurrido un error: {error}</div>;
  // }
  //console.log("PPPPP", productsss);

  // React.useEffect(() => {
  //   products
  //     .getAll()
  //     .then((res) => {
  //       setAllProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  return (
    <div>
      <div>ADMINISTRAR MARCAS</div>
      <br />
      <br />
      <br />
      <div>
        {allProducts?.length !== 0 ? (
          allProducts?.map((p: ProductType) => (
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

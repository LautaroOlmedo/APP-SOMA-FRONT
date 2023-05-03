import React from "react";
import { BrandType } from "../../home/interfaces/brand.interface";
import { brands } from "../../../api/brands";
import { CardComponent } from "../../../components";

export const BrandsManagementPage: React.FC<{}> = () => {
  const [allBrands, setAllBrands] = React.useState<BrandType[] | null>(null);

  React.useEffect(() => {
    brands
      .getAll()
      .then((res) => {
        setAllBrands(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(allBrands);

  return (
    <div>
      <div>ADMINISTRAR MARCAS</div>
      <br />
      <br />
      <br />
      <div>
        {allBrands?.length !== 0 ? (
          allBrands?.map((b) => (
            <CardComponent
              key={b.id}
              id={b.id}
              brandName={b.brandName}
              webSite={b.webSite}
              createdAt={b.createdAt}
              updatedAt={b.updatedAt}
              image={b.image}
              users={b.users}
              stores={b.stores}
            />
          ))
        ) : (
          <div>No hay resultados</div>
        )}
      </div>
    </div>
  );
};

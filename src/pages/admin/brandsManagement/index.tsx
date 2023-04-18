import React from "react";
import { brands } from "../../../api/brands";
import { TypeBrand } from "../../home/interface/brand.interface";

export const BrandManagementPage: React.FC<{}> = () => {
  const [allBrands, setAllBrands] = React.useState<TypeBrand[] | null>(null);

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
  console.log("BRANDS: ", allBrands);

  return (
    <div>
      {allBrands?.length !== 0 ? (
        allBrands?.map((b) => (
          <li key={b.id}>
            <ul>
              <p>Name: {b.brandName}</p>
              <p>Web Site: {b.webSite}</p>
            </ul>
          </li>
        ))
      ) : (
        <div>No hay resultados</div>
      )}
    </div>
  );
};

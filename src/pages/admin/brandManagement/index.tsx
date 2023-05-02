import React from "react";
import { BrandType } from "../../home/interfaces/brand.interface";
import { brands } from "../../../api/brands";

export const BrandsManagementPage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacter] = React.useState<BrandType[] | null>(
    null
  );

  React.useEffect(() => {
    brands
      .getAll()
      .then((res) => {
        setAllCharacter(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(allCharacters);

  return (
    <div>
      <div>ADMINISTRAR MARCAS</div>
    </div>
  );
};

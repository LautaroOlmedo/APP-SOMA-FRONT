import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { BrandType } from "./interfaces/brand.interface";
import { brands } from "../../api/brands";

export const HomePage: React.FC<{}> = () => {
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

  return <div>hola mundo</div>;
};

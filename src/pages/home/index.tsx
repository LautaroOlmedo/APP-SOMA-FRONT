import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";
import { Grid4x4Rounded } from "@mui/icons-material";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacter] = React.useState<
    TypeCharacter[] | null
  >(null);

  React.useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((res) => {
        setAllCharacter(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <Container maxWidth="xl">
      {/* <Button fullWidth variant="contained">
        Hola Mundo
      </Button> */}
      <HeaderComponent
        title="App Soma"
        description="APP de Nara Di Rocco, (toda la descripcion)"
        element={
          <Button fullWidth variant="contained">
            Contacto
          </Button>
        }
      />
    </Container>
  );
};

import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  React.useEffect(() => {
    characters
      .getById({ id: 1 })
      .then((res) => {
        console.log(res.data);
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

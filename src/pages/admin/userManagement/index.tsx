import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { CardComponent, HeaderComponent } from "../../../components";
import { characters } from "../../../api/characters";
import { TypeCharacter } from "../../home/interface/character.interface";

export const UserMAnagementPage: React.FC<{}> = () => {
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
      {/* <HeaderComponent
        title="App Soma"
        description="APP de Nara Di Rocco, (toda la descripcion)"
        element={
          <Button fullWidth variant="contained">
            Contacto
          </Button>
        }
      /> */}
      <div>
        {allCharacters?.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allCharacters?.map((c) => (
              <Grid item xs={3}>
                <CardComponent
                  key={c.id}
                  image={c.image}
                  name={c.name}
                  species={c.species}
                  status={c.status}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div>No hay resultados</div>
        )}
      </div>
    </Container>
  );
};

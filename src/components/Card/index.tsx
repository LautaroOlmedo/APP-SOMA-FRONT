import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

type CardsProp = {
  image: string;
  name: string;
  species: string;
  status: string;
};

export const CardComponent: React.FC<CardsProp> = ({
  image,
  name,
  species,
  status,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardContent>
        <CardActions disableSpacing>
          <Button fullWidth variant="contained" size="small">
            Learn Moore
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

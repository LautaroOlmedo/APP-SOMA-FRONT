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
import { Image } from "@mui/icons-material";
import { UserType } from "../../pages/home/interfaces/user.interface";

type BrandsProp = {
  brandName: string;
  webSite: string;
  image: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  users: UserType[];
  stores: string[];
};

export const CardComponent: React.FC<BrandsProp> = ({
  brandName,
  webSite,
  image,
  id,
  createdAt,
  updatedAt,
  users,
  stores,
}) => {
  return (
    <div>
      <ul>
        <li>
          Id: {id} <br /> <br />
          Nombre: {brandName} <br /> <br />
          Sitio Web: {webSite} <br /> <br />
          imagen: {image} <br /> <br />
          Nombre: {brandName} <br /> <br />
          creado: {createdAt}
          <br /> <br />
          actualizado: {updatedAt}
          <br /> <br />
          {/* Usuarios:{" "} // REALMENTE HAY QUE PONER LOS USUARIOS Y TIENDAS? YA QUE LA IDEA ES ADMINISTRAR MARCAS
          {users
            ? users?.map((user) => (
                <ul>
                  <li>
                    Nombre: {user.lastname}
                    Apellido: {user.firstname}
                  </li>
                </ul>
              ))
            : "No se encontraron usuarios"}
          Tiendas: {stores} */}
        </li>
      </ul>
    </div>
  );
};

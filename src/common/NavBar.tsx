import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>SOMA APP</div>
      <button>LOGIN</button>
    </div>
  );
};

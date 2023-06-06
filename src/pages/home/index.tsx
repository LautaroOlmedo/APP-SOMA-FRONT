import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { BrandType } from "./interfaces/brand.interface";
import { brands } from "../../api/brands";
import { loadStoresAction } from "../../redux/actions/stores.actions";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomePage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [allCharacters, setAllCharacter] = React.useState<BrandType[] | null>(
    null
  );

  useEffect(() => {
    dispatch(loadStoresAction() as any);
  }, [dispatch]);
  const selectIsOn = (state: RootState) => state.storeReducer;
  const store = useSelector(selectIsOn);
  let allStores = store.stores;
  console.log(allStores);

  // React.useEffect(() => {
  //   brands
  //     .getAll()
  //     .then((res) => {
  //       setAllCharacter(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  // console.log(allCharacters);

  return <div>hola mundo</div>;
};

import React from "react";
import YourWolfPack from "./YourWolfPack";
import AllWolfPack from "./AllWolfPack";
import TopCards from "../Dashboard/TopCards";
import { Container } from "@mui/material";

const Wolfpacks = () => {
  return (
    <Container maxWidth="lg">
      <TopCards />
      <YourWolfPack />
      <AllWolfPack />
    </Container>
  );
};

export default Wolfpacks;

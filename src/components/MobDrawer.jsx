import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Staking from "./Staking/Staking";
import Wolfpacks from "./wolfpack/Wolfpacks";
import AlphaaNFT from "./alphaNFTs/AlphaaNFT";
import Battles from "./battles/Battles";
import Navbar from "../Sidebar/Navbar";

const MobDrawer = () => {
  return (
    <div>
      <Box
        sx={{
          display: { md: "none", sm: "none", xs: "flex" },
        }}
      >
        <Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/wolfpacks" element={<Wolfpacks />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/nft" element={<AlphaaNFT />} />
          </Routes>
        </Navbar>
      </Box>
    </div>
  );
};

export default MobDrawer;

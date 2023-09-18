import SideBar from "../Sidebar/SideBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Staking from "./Staking/Staking";
import Wolfpacks from "./wolfpack/Wolfpacks";
import AlphaaNFT from "./alphaNFTs/AlphaaNFT";
import Battles from "./battles/Battles";
// import Navbar from "../Sidebar/MobileDrawer";
// import MobileDrawer from "../Sidebar/MobileDrawer";

const AdminDrawer = () => {
  return (
    <div
      style={{
        // overflowX: "hidden",
        background: "#191919",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Box>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stake" element={<Staking />} />
            <Route path="/wolfpacks" element={<Wolfpacks />} />
            <Route path="/weekly-battles" element={<Battles />} />
            <Route path="/nfts" element={<AlphaaNFT />} />
          </Routes>
        </SideBar>
      </Box>
    </div>
  );
};

export default AdminDrawer;

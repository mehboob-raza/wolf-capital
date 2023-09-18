import { Box } from "@mui/material";
import "./App.css";
import LandingPage from "./LandingPage/index";
import { Routes, Route } from "react-router-dom";
import AdminDrawer from "./components/AdminDrawer";
// import MobDrawer from "./components/MobDrawer";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dapp/*" element={<AdminDrawer />} />
        {/* <Route path="/dapp/*" element={<MobDrawer />} /> */}

        {/* <SideBar>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/wolfpacks" element={<Wolfpacks />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/nft" element={<AlphaaNFT />} />
        </SideBar> */}
      </Routes>
    </Box>
  );
}

export default App;

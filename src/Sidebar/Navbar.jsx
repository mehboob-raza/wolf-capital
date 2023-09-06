import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import bar from "../assets/bars.svg";
import React from "react";
import { MdDashboard, MdToken } from "react-icons/md";
import { FaCommentsDollar } from "react-icons/fa";
import { BsFileWord, BsTrophy } from "react-icons/bs";
import { RiWallet2Fill } from "react-icons/ri";
import LOGOWC from "../assets/LOGOWC.png";
import { Link } from "react-router-dom";

const sidebarData = [
  {
    h: (
      <>
        <Button
          sx={{
            backgroundImage: "linear-gradient(to right, #079BD1 50%, #4526D1)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 1, // Adjust as needed
            p: 2,
          }}
        >
          Connect Wallet
        </Button>
      </>
    ),
    logo: <RiWallet2Fill style={{ color: "#fff", fontSize: "20px" }} />,
  },
  {
    h: "Dashboard",
    logo: <MdDashboard style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp",
  },
  {
    h: "Staking",
    logo: <FaCommentsDollar style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/staking",
  },
  {
    h: "Wolfpacks",
    logo: <BsFileWord style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/wolfpacks",
  },
  {
    h: "Weekly Battles",
    logo: <BsTrophy style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/battles",
  },
  {
    h: "Alpha NFT",
    logo: <MdToken style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/nft",
  },
];
const Navbar = () => {
  const [state, setState] = React.useState({ left: false });
  // const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(!open);
  // };

  const selctedButton = (i) => {
    if (i) {
      setSelected(true);
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : { xs: 280, sm: 500 },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List p={3}>
        {sidebarData.map(({ h, link, logo }, i) => (
          <ListItem key={h}>
            <ListItemButton onClick={() => selctedButton(i)}>
              <Link
                to={link}
                style={{
                  textDecoration: "none",
                  justifyContent: "center",
                  px: 1.5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,

                    justifyContent: "center",
                    color: selected ? "blue" : "transparent",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    {logo}
                  </Box>
                </ListItemIcon>
                <ListItemText primary={h} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          sx={{
            justifyContent: "space-between",
            background: "transparent",
          }}
          alignItems="center"
          // pt={2}
        >
          <Box component="img" src={LOGOWC} alt="vector" width={100} mt={3} />

          <Box
            display="flex"
            gap={3}
            sx={{}}
            // justifyContent="center"
          >
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                  <Box
                    onClick={toggleDrawer(anchor, true)}
                    component="img"
                    src={bar}
                    alt="bars"
                    sx={{
                      cursor: "pointer",

                      mt: 3,
                      display: { md: "none", sm: "flex", xs: "flex" },
                    }}
                  />
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

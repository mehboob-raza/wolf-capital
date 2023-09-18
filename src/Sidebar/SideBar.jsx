import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";

// All Icones used in this component
import { SiDiscord, SiGitbook } from "react-icons/si";
import { MdExpandMore } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";

import TelegramIcon from "@mui/icons-material/Telegram";

import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";

import logo from "../assets/logo.png";
import minilogo from "../assets/minilogo.png";
import arrowright from "../assets/arrowright.png";
import dashboardicon from "../assets/dashboard-icon.png";
import dashboardiconactive from "../assets/dashboard-icon-active.png";

import dolloricon from "../assets/dollor-icon.png";
import dolloriconactive from "../assets/dollor-icon-active.png";
import wicon from "../assets/w-icon.png";
import wiconactive from "../assets/w-icon-active.png";
import cupicon from "../assets/cup-icon.png";
import cupiconactive from "../assets/cup-icon-active.png";
import nfticon from "../assets/nft-icon.png";
import nfticonactive from "../assets/nft-icon-active.png";
import moreicon from "../assets/more-icon.png";
import contracticon from "../assets/contract.png";
import contractActive from "../assets/contractActive.png";

//Style box for social media links
const StyleSocialBox = ({ miniDrawerShow, array, ...props }) => {
  const loc = useLocation();
  return (
    <Stack
      {...props}
      direction="column"
      ml={miniDrawerShow ? 0 : 1}
      gap={2}
      justifyContent="center"
    >
      {array.map(({ link, Icon, name, active, img: logo }, i) => {
        return (
          <React.Fragment key={i}>
            {active ? (
              <Link
                key={i}
                to={link}
                style={{
                  display: !miniDrawerShow && "flex",
                  gap: !miniDrawerShow && 20,
                  alignItems: !miniDrawerShow && "center",
                  textDecoration: "none",
                }}
              >
                {loc.pathname === link ? (
                  <img
                    src={active}
                    alt="logo"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  />
                ) : (
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  />
                )}
                {!miniDrawerShow && (
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: "15px", md: "16px" },
                      color: loc.pathname === link ? "#0C82D8" : "#fff",
                    }}
                  >
                    {name}
                  </Typography>
                )}
              </Link>
            ) : (
              <MuiLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: !miniDrawerShow && "flex",
                  gap: !miniDrawerShow && 2.5,
                  alignItems: !miniDrawerShow && "center",
                  textDecoration: "none",
                }}
              >
                <Icon style={{ fontSize: "2rem", color: "#fff" }} />
                {!miniDrawerShow && (
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "15px", md: "16px" } }}
                  >
                    {name}
                  </Typography>
                )}
              </MuiLink>
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

//array of pages names and links
const pagesName = [
  {
    link: "/dapp",
    text: "Dashboard",
    img: dashboardicon,
    active: dashboardiconactive,
  },
  {
    link: "/dapp/stake",
    text: "Staking",
    img: dolloricon,
    active: dolloriconactive,
  },
  {
    link: "/dapp/wolfpacks",
    text: "Wolfpacks",
    img: wicon,
    active: wiconactive,
  },
  {
    link: "/dapp/weekly-battles",
    text: "Weekly Battles",
    img: cupicon,
    active: cupiconactive,
  },
  {
    link: "/dapp/nfts",
    text: "Alpha NFTs",
    img: nfticon,
    active: nfticonactive,
  },
];

//array of social media links and icons
const socialIcons1 = [
  {
    link: "https://t.me/WolfCapitalUSDC",
    Icon: TelegramIcon,
    name: "Telegram",
  },
  {
    link: "https://twitter.com/Wolf_Capital_",
    Icon: TwitterIcon,
    name: "Twitter",
  },
  {
    link: "https://discord.gg/Pgj3XqFy4f",
    Icon: SiDiscord,
    name: "Discord",
  },
  {
    link: "https://docs.wolfcapital.app/",
    Icon: SiGitbook,
    name: "Gitbook",
  },
  {
    link: "/dapp/nft-addresses",
    Icon: FaFileContract,
    name: "Smart Contract",
    img: contracticon,
    active: contractActive,
  },
];

// array of appBar boxes

// ---------------------------------------

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [socialIcon, setSocialIcon] = React.useState(false);
  const [miniDrawerShow, setMiniDrawerShow] = React.useState(true);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const check = useMediaQuery("(max-width:700px)");
  const check4 = useMediaQuery("(max-width:1200)");
  const drawerWidth = miniDrawerShow ? 120 : 310;
  // const minidrawerWidth = 120;

  React.useEffect(() => {
    if (check) {
      // setMiniDrawerShow(false);
    }
  }, [check4, check, setMiniDrawerShow]);

  const loc = useLocation();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    // console.log("toggle");
  };

  const MiniDrawer = (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "50px",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box mb={4} pt={1} sx={{ textAlign: "center" }}>
          <NavLink to="/">
            <img
              src={minilogo}
              alt="logo"
              style={{ width: "66px", height: "70px" }}
            />
          </NavLink>
        </Box>

        {/* pages integration with respect to links */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pagesName.map(({ link, Icon, active, img }, i) => {
            return (
              <React.Fragment key={i}>
                <NavLink
                  key={i}
                  to={link}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ListItem
                    sx={{
                      width: "100%",
                      background:
                        loc.pathname === link &&
                        "linear-gradient(135deg, #282828 0%, #454545 62.29%, #7C7C7C 100%)",
                      boxShadow:
                        loc.pathname === link &&
                        "2.9318px 5.8636px 8.79541px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(255, 255, 255, 0.25)",
                      borderRadius: loc.pathname === link && "10px",
                      mb: 3.5,
                      paddingX: "13px",
                      paddingY: "10px",
                    }}
                    onClick={() => check && handleDrawerToggle()}
                  >
                    {Icon ? (
                      <Icon
                        size={28}
                        color={loc.pathname === link ? "#0C82D8" : "#fff"}
                      />
                    ) : (
                      <>
                        {loc.pathname === link ? (
                          <img
                            src={active}
                            alt="logo"
                            style={{
                              width: i === 4 ? "28px" : "32px",
                              height: "32px",
                            }}
                          />
                        ) : (
                          <img
                            src={img}
                            alt="logo"
                            style={{
                              width: i === 4 ? "28px" : "32px",
                              height: "32px",
                            }}
                          />
                        )}
                      </>
                    )}
                  </ListItem>
                </NavLink>
              </React.Fragment>
            );
          })}
        </List>
        {/* social media links of miner dao */}
        <Box onClick={() => setSocialIcon(!socialIcon)}>
          <img src={moreicon} alt="" width="33px" height="32px" />
        </Box>
        {socialIcon && (
          <Box mt={"26px"}>
            <StyleSocialBox
              array={socialIcons1}
              miniDrawerShow={miniDrawerShow}
            />
          </Box>
        )}
        <Toolbar />
      </Container>
    </Box>
  );

  const drawer = (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "50px",
        height: "100%",
      }}
    >
      <Container>
        <Box mb={4} pt={2} sx={{ textAlign: "center" }}>
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "220px", width: "100%", height: "70px" }}
            />
          </NavLink>
        </Box>

        {/* pages integration with respect to links */}
        <List>
          {pagesName.map(({ link, Icon, text, img, active }, i) => {
            return (
              <React.Fragment key={i}>
                <NavLink key={i} to={link} style={{ textDecoration: "none" }}>
                  <ListItem
                    sx={{
                      background:
                        loc.pathname === link &&
                        "linear-gradient(135deg, #282828 0%, #454545 62.29%, #7C7C7C 100%)",
                      boxShadow:
                        loc.pathname === link &&
                        "2.9318px 5.8636px 8.79541px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(255, 255, 255, 0.25)",
                      borderRadius: loc.pathname === link && "10px",
                      mb: 3.5,
                      paddingX: "13px",
                      paddingY: "10px",
                      "&:hover": {
                        backgroundColor:
                          loc.pathname === link ? "#1c1c1c" : "transparent",
                      },
                    }}
                    onClick={() => check && handleDrawerToggle()}
                  >
                    {Icon ? (
                      <Icon
                        size={28}
                        color={loc.pathname === link ? "#0C82D8" : "#fff"}
                      />
                    ) : (
                      <>
                        {loc.pathname === link ? (
                          <img
                            src={active}
                            alt="logo"
                            style={{
                              width: i === 4 ? "28px" : "32px",
                              height: "32px",
                            }}
                          />
                        ) : (
                          <img
                            src={img}
                            alt="logo"
                            style={{
                              width: i === 4 ? "28px" : "32px",
                              height: "32px",
                            }}
                          />
                        )}
                      </>
                    )}
                    <ListItemText sx={{ paddingLeft: "9%" }}>
                      <Typography
                        variant="body1"
                        color={loc.pathname === link ? "#0C82D8" : "#d9d9d9"}
                      >
                        {text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </NavLink>
              </React.Fragment>
            );
          })}
        </List>

        {/* social media links of miner dao */}

        <Box
          onClick={() => setSocialIcon(!socialIcon)}
          display="flex"
          alignItems="center"
          sx={{
            paddingX: "13px",
            cursor: "pointer",
          }}
        >
          <img src={moreicon} alt="" width="33px" height="32px" />
          <Typography variant="body1" sx={{ paddingLeft: "9%" }}>
            More
          </Typography>
          <MdExpandMore
            style={{
              color: "#fff",
              fontSize: "24px",
              marginLeft: "20px",
            }}
          />
        </Box>
        {socialIcon && (
          <Box
            sx={{
              borderLeft: "2px solid #D9D9D9",
              px: "13px",
              ml: "25px",
              mt: "26px",
            }}
          >
            <StyleSocialBox array={socialIcons1} />
          </Box>
        )}

        <Toolbar />
      </Container>
    </Box>
  );

  return (
    <>
      <Box className="side_drawer">
        <Box sx={{ display: "flex" }}>
          {/* ------- menu and arrow ------- */}
          <AppBar
            position="absolute"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              zIndex: 1,
              display: {
                xs: "flex",
                lg: "none",
              },
            }}
          >
            <Toolbar
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ display: { md: "flex", lg: "none" } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: 0,
                    color: "#fff",
                    background: "transparent",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              position: "fixed",
              zIndex: 1,
              top: "92.5px",
              left: miniDrawerShow ? "96.5px" : "287px",
              transition: "0.07s ease-in-out",
              display: {
                xs: "none",
                lg: "block",
              },
            }}
            onClick={() => {
              setMiniDrawerShow(!miniDrawerShow);
            }}
          >
            <img
              src={arrowright}
              alt="arrow"
              style={{
                height: "45px",
                width: "45px",
              }}
            />
          </Box>

          <Box
            component="nav"
            sx={{
              width: { lg: drawerWidth },
              flexShrink: { sm: 0 },
              transition: "0.07s ease-in-out",
            }}
            aria-label="mailbox folders"
            zIndex={0}
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: "block",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 310,
                  background:
                    "linear-gradient(180deg, #101010 -19.87%, #242424 85.72%)",
                  border: "1px solid #191919",
                  boxShadow: "5px 0px 30px rgba(0, 0, 0, 0.8)",
                  borderRight: "1px solid #404040",
                  WebkitOverflowScrolling: "smooth",
                },
                height: "100%",
              }}
            >
              {drawer}
            </Drawer>
            {/* desktop view drawer */}

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", lg: "block" },
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  transition: "0.07s ease-in-out",
                  boxSizing: "border-box",
                  background:
                    "linear-gradient(180deg, #101010 -19.87%, #242424 85.72%)",
                  border: "1px solid #191919",
                  boxShadow: "5px 0px 30px rgba(0, 0, 0, 0.8)",
                  borderRight: "1px solid #404040",
                },
              }}
              open
            >
              {miniDrawerShow ? MiniDrawer : drawer}
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: {
                xs: "100%",
                sm: `calc(100% - ${drawerWidth}px)`,
              },
              minHeight: "100vh",
              height: "100%",
              transition: "0.07s ease-in-out",
            }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
ResponsiveDrawer.propTypes = { window: PropTypes.func };
export default ResponsiveDrawer;

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import IconButton from "@mui/material/IconButton";
// import { Link } from "react-router-dom";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { Button } from "@mui/material";
// import { MdDashboard, MdToken } from "react-icons/md";
// import { FaCommentsDollar } from "react-icons/fa";
// import { BsFileWord, BsTrophy } from "react-icons/bs";
// import PropTypes from "prop-types";
// import { RiWallet2Fill } from "react-icons/ri";
// import LOGOWC from "../assets/LOGOWC.png";

// const drawerWidth = 240;

// const sidebarData = [
//   {
//     h: (
//       <>
//         <Button
//           sx={{
//             backgroundImage: "linear-gradient(to right, #079BD1 50%, #4526D1)",
//             color: "white",
//             fontWeight: "bold",
//             borderRadius: 1, // Adjust as needed
//             p: 2,
//           }}
//         >
//           Connect Wallet
//         </Button>
//       </>
//     ),
//     logo: <RiWallet2Fill style={{ color: "#fff", fontSize: "20px" }} />,
//   },
//   {
//     h: "Dashboard",
//     logo: <MdDashboard style={{ color: "#fff", fontSize: "20px" }} />,
//     link: "/dapp",
//   },
//   {
//     h: "Staking",
//     logo: <FaCommentsDollar style={{ color: "#fff", fontSize: "20px" }} />,
//     link: "/dapp/staking",
//   },
//   {
//     h: "Wolfpacks",
//     logo: <BsFileWord style={{ color: "#fff", fontSize: "20px" }} />,
//     link: "/dapp/wolfpacks",
//   },
//   {
//     h: "Weekly Battles",
//     logo: <BsTrophy style={{ color: "#fff", fontSize: "20px" }} />,
//     link: "/dapp/battles",
//   },
//   {
//     h: "Alpha NFT",
//     logo: <MdToken style={{ color: "#fff", fontSize: "20px" }} />,
//     link: "/dapp/nft",
//   },
// ];

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// function SideBar({ children }) {
//   //   const theme = useTheme();
//   // const { window, children } = props;

//   const [open, setOpen] = React.useState(false);
//   const [selected, setSelected] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(!open);
//   };

//   const selctedButton = (i) => {
//     if (i) {
//       setSelected(true);
//     }
//   };
//   const container =
//     window !== undefined ? () => window().document.body : undefined;
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <Drawer
//         // container={container}
//         variant="permanent"
//         open={open}
//         sx={{
//           // display: { md: "flex", sm: "flex", xs: "none" },
//           ".MuiDrawer-paper": {
//             background: "#191919",
//             borderRight: "1px solid #242424",
//           },
//         }}
//       >
//         <Box component="img" src={LOGOWC} />
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <IconButton
//             onClick={() => handleDrawerOpen()}
//             sx={{
//               position: "absolute",
//               right: "-10px",
//               top: "80px",
//             }}
//           >
//             <ChevronRightIcon
//               style={{
//                 color: "#fff",
//               }}
//             />
//           </IconButton>
//         </Box>
//         <List>
//           {sidebarData.map(({ h, logo, link }, i) => (
//             <ListItem
//               key={i}
//               disablePadding
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <ListItemButton
//                 onClick={() => selctedButton(i)}
//                 sx={
//                   {
//                     //   minHeight: 48,
//                     //   justifyContent: open ? "initial" : "center",
//                     //   px: 1.5,
//                     //   display: "flex",
//                     //   alignItems: "center",
//                     //   background: selected ? "blue" : "transparent",
//                   }
//                 }
//               >
//                 <Link
//                   to={link}
//                   style={{
//                     textDecoration: "none",
//                     justifyContent: open ? "initial" : "center",
//                     px: 1.5,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                       color: selected ? "blue" : "transparent",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: i === 0 && open ? "none" : "block",
//                       }}
//                     >
//                       {logo}
//                     </Box>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={h}
//                     sx={{ opacity: open ? 1 : 0, color: "#fff" }}
//                   />
//                 </Link>
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 2,
//           background: "#191919",
//           minHeight: "100vh",
//           opacity: 1,
//           zIndex: 0,
//           position: "relative",
//         }}
//       >
//         {children}
//         {/* <Dashboard /> */}
//       </Box>
//     </Box>
//   );
// }
// SideBar.propTypes = {
//   window: PropTypes.func,
// };
// export default SideBar;

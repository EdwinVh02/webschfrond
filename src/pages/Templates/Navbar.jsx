import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import {
  AppBar,
  Box,
  Icon,
  Toolbar,
  Typography,
  Tabs,
  Tab as MaterialLink,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material/";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DrawerComp from "./DrawerComp";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import RoomDataService from "../../components/Cuartos/room.servicies";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [values, setValues] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUser = async (id) => {
    const docSnapUser = await RoomDataService.getUser(id);
    return docSnapUser.data();
  };

  const handleClosePerfil = async () => {
    setAnchorEl(null);
    navigate("/perfil");
  };

  const handleCloseRooms = async () => {
    setAnchorEl(null);
    let userA = await getUser(user.uid);
    if (userA.rol === "Arrendador") navigate("/miscuartos");
    else navigate("/micuarto");
  };

  const handleCloseSesion = async () => {
    setAnchorEl(null);
    try {
      await logout();
      navigate("/iniciarsesion");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <AppBar position="fixed" style={{ backgroundColor: "#804821", height: "100px"}}>
        <Toolbar>
          <img
            src={Logo}
            alt="Logosynth"            
            style={{ width: "100px", height: "100px",  padding: "5px" }}
          />
          <Typography variant="h4" style={{ fontFamily: "Arial" }} >
            Santa Cecilia
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{
                  marginLeft: "auto",
                  "& .MuiTab-root:hover": {
                    backgroundColor: "#a04000", 
                  },
                }}
                textColor="inherit"
                value={values}
                onChange={(e, values) => setValues(values)}
                indicatorColor="primary"
              >
                <MaterialLink
                  component={RouterLink}
                  to="/"
                  textcolor="inherit"
                  sx={{ marginLeft: "auto" }}
                  underline="none"
                  label="Inicio"
                />
                <MaterialLink
                  component={RouterLink}
                  to="/zonas"
                  textcolor="inherit"
                  sx={{ marginLeft: "auto" }}
                  underline="none"
                  label="Cuartos"
                />
                <MaterialLink
                  component={RouterLink}
                  to="/acercade"
                  textcolor="inherit"
                  sx={{ marginLeft: "auto" }}
                  underline="none"
                  label="Acerca de"
                />
                {user != null ? (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClosePerfil}>Perfil</MenuItem>
                      <MenuItem onClick={handleCloseRooms}>
                        Mis cuartos
                      </MenuItem>
                      <MenuItem onClick={handleCloseSesion}>
                        Cerrar Sesion
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <div>
                    <MaterialLink
                      component={RouterLink}
                      to="/registro"
                      textcolor="inherit"
                      sx={{ marginLeft: "auto" }}
                      underline="none"
                      label="Registrarme"
                    />
                    <MaterialLink
                      component={RouterLink}
                      to="/iniciarsesion"
                      textcolor="inherit"
                      sx={{ marginLeft: "auto" }}
                      underline="none"
                      label="Iniciar Sesion"
                    />
                  </div>
                )}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

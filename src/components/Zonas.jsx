import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  styled,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import habitaciones from "./habitaciones.json";

const Titulo = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#DBB689",
}));

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

const Zonas = () => {

  const [zoom, setZoom] = useState(1);
  /*const handleWheel = (event) => {
    setZoom(Math.min(Math.max(0.5, zoom + event.deltaY * 0.005), 3));
  };*/

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      /*onWheel={handleWheel}*/
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <Box sx={{ flexGrow: 1 }} style={{ transform: `scale(${zoom})` }}>
        <Grid item xs={15} sx={{ mb: 10 }}>
          <Titulo elevation={0}>
            <h3>Habitaciones Disponibles</h3>
          </Titulo>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div style={{ height: '900px', overflowY: 'scroll' }}>
              {habitaciones.map((habitacion, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} sm={6} md={6} key={habitacion.id}>
                    <Item elevation={0}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350"
                            image={require(`../assets/${habitacion.imagen}`)}
                            alt={habitacion.titulo}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {habitacion.titulo}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Item>
                  </Grid>
                </React.Fragment>
              ))}
            </div>
          </Grid>
          
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Zonas;

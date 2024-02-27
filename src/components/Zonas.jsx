import React from "react";
import { motion } from "framer-motion";
import {
  styled,
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const Titulo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor:"#DBB689"
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor:"#DBB689",
  textAlign: "center"
}));

const Zonas = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}//Duracion de transicion de las interfaces 
    >
      <Box sx={{ flexGrow: 1 }} >
        <Grid item xs={15} sx={{ mb: 10 }}>
          <Titulo elevation={0}>
            <h3>Habitaciones Disponibles</h3>
          </Titulo>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Item elevation={0}>
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <Item elevation={0} marginLeft={5} >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_juniorsuite.jpg")}
                          alt="Habitacion Estandar"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                           Habitacion Estandar 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">                            
                            <strong>CUENTA CON:</strong><br/>
                              1 Cama Matrimonial <br/>
                            <strong>SERVICIOS:</strong><br/>
                              Wifi,
                              Tv por cable, 
                              Agua fría y caliente, 
                              Aire acondicionado,
                              Servicios<br/>
                            <strong>AMENIDADES:</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal<br />
                              <strong>Precio: $679.00</strong><br/>
                            <strong>1 Persona</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0} marginLeft={5} >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_estandar2Camas.jpg")}
                          alt="Habitacion Estandar"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                           Habitacion Estandar 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">                            
                            <strong>CUENTA CON:</strong><br/>
                              2 Camas Matrimoniales<br/>
                            <strong>SERVICIOS:</strong><br/>
                              Wifi,
                              Tv por cable, 
                              Agua fría y caliente, 
                              Aire acondicionado,
                              Servicios<br/>
                            <strong>AMENIDADES:</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal<br />
                            <strong>Precio: $739</strong><br/>
                            <strong>2 Personas</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0} marginLeft={5} >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_estandar2Camas.jpg")}
                          alt="Habitacion Estandar"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                           Habitacion Estandar 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">                            
                            <strong>CUENTA CON:</strong><br/>
                              3 Camas Individuales<br/>
                            <strong>SERVICIOS:</strong><br/>
                              Wifi,
                              Tv por cable, 
                              Agua fría y caliente, 
                              Aire acondicionado,
                              Servicios<br/>
                            <strong>AMENIDADES:</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal<br />
                            <strong>Precio: $819</strong><br/>
                            <strong>3 Personas</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_juniorsuite.jpg")}
                          alt="Habitacion Junior Suite"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Habitacion Junior Suite 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>CUENTA CON:</strong><br />
                              1 Cama king size,
                              Mesa y silla de trabajo,
                              Sofá,
                              Frigobar pequeño.<br/>
                              <strong>SERVICIOS:</strong><br />
                              Tv por cable,
                              Agua fría y calientes, 
                              Aire acondicionado<br/>
                            <strong>AMENIDADES</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal.<br />
                              <strong>Precio: $819</strong><br/>
                              <strong>1 Persona</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_juniorsuite.jpg")}
                          alt="Habitacion Junior Suite"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Habitacion Junior Suite 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>CUENTA CON:</strong><br />
                              2 Camas Individuales king size,
                              Mesa y silla de trabajo,
                              Sofá,
                              Frigobar pequeño.<br/>
                              <strong>SERVICIOS:</strong><br />
                              Tv por cable,
                              Agua fría y calientes, 
                              Aire acondicionado<br/>
                            <strong>AMENIDADES</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal.<br />
                              <strong>Precio: $819</strong><br/>
                              <strong>2 Personas</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350"
                          image={require("../assets/habitacion_juniorsuite.jpg")}
                          alt="Habitacion Junior Suite"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Habitacion Junior Suite 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>CUENTA CON:</strong><br />
                              3 Camas Individuales king size,
                              Mesa y silla de trabajo,
                              Sofá,
                              Frigobar pequeño.<br/>
                              <strong>SERVICIOS:</strong><br />
                              Tv por cable,
                              Agua fría y calientes, 
                              Aire acondicionado<br/>
                            <strong>AMENIDADES</strong><br/>
                              Desayuno continental, 
                              Kit de aseo personal.<br />
                              <strong>Precio: $819</strong><br/>
                              <strong>3 Personas</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Zonas;

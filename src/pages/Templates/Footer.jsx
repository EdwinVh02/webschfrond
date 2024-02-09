import React, {useEffect} from 'react';
import {Container, Box, Grid, Link, IconButton, Typography, Button} from '@mui/material/';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { getAuth,  } from 'firebase/auth';
import { messaging } from '../../firebase/Firebase';
import { getToken, onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../context/authContext';
import "react-toastify/dist/ReactToastify.css"
import {
    NavLink as RouterLink
} from "react-router-dom";

const Footer = () => {
    
  useEffect(()=>{
    onMessage(messaging, message=>{
      // console.log("Mensaje", message);
      toast(message.notification.title);
    })
  })

  const loguearse = async ()=> {
    if (useAuth){
        console.log('Hay usuario ', useAuth.name)
        activarMensajes();
    }
  }

  const activarMensajes = async ()=> {
    const token = await getToken(messaging, {
      vapidKey: "BMKD40uAKCUsC5pIlaWhQNS1gT0ZL3DC4qMd5QBjOP57tw8Qz5vZYJ0O0NGtNYbX56dt45AfzzxUVCNyItigwi0"
    }).catch(error => console.log("Hubo un error al generar el token ", error));

    if(token) console.log('¡Todo OK!', token)
  }

    return (
        <footer>
                <Box 
                    sx={{ mt: 5 }}
                    px={{xs: 3, sm: 10}}
                    py={{xs: 3, sm: 3}}              
                    bgcolor="text.secondary" 
                    backgroundColor="#3C2412"
                    color="white"
                >
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>Ayuda</Box>
                                <Box>
                                    <Link 
                                        color='inherit' 
                                        underline='none' 
                                        component={RouterLink} 
                                        to='/contacto' 
                                    >
                                        Contacto
                                    </Link>                        
                                </Box>
                                <Box>
                                    <Link 
                                        color='inherit' 
                                        underline='none'
                                        component={RouterLink} 
                                        to='/soporte'
                                    >
                                        Soporte
                                    </Link>
                                </Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/avisolegal'
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Aviso legal
                                    </Link>
                                </Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/politica'
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Politica de Privacidad
                                    </Link>
                                </Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/cookies' 
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Politica de cookies
                                    </Link>
                                </Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/preguntas' 
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Preguntas Frecuentes
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>Cuenta</Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/iniciarsesion' 
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Iniciar Sesion
                                    </Link>
                                </Box>
                                <Box>
                                    <Link 
                                        component={RouterLink} 
                                        to='/cuenta' 
                                        color='inherit' 
                                        underline='none'
                                    >
                                        Registrarme
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1} >Descarga gratis nuestra aplicación</Box>
                                <Box>
                                    Proximamente...
                                </Box>                           
                            </Grid>
                        </Grid>
                        <Box
                        sx={{
                            textAlign: 'center',
                            pt: { xs: 5, sm: 4 },
                            pb: { xs: 5, sm: 0 },
                        }}>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                }}>
                                <IconButton color="inherit" aria-label="menu">
                                <FacebookIcon color="dark" />
                                </IconButton>
                                <IconButton color="inherit" aria-label="menu">
                                <TwitterIcon color="dark" />
                                </IconButton>
                                <IconButton color="inherit" aria-label="menu">
                                <InstagramIcon color="dark" />
                                </IconButton>
                            </Box>
                            <Box
                                className="col-md-5 offset-md-1 mb-3"
                                sx={{
                                padding: '20px',
                                borderRadius: '10px',
                                }}>
                                <form>
                                    <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                                        Suscríbete para recibir noticias
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: '20px' }}>
                                        Podrás recibir actualizaciones de cuartos en la zona.
                                    </Typography>
                                    {/* <Button
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                        sx={{ width: '40%' }}
                                        onClick={loguearse}>
                                         Suscribirse
                                    </Button> */}
                                </form>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                &reg; {new Date().getFullYear()} Your Room. Todos los derechos reservados
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </footer>
    );
};

export default Footer;
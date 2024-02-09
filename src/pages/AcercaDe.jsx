import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Grid,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import styles from './AcercaDe.module.css'
const AcercaDe = () => {
    return (
        <motion.div
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <br/>
                        <CardMedia
                            component="img"
                            height="500"
                            image={require('../assets/logo.jpg')}
                            alt="Cuarto Aviacion Civil"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ¿Quienes somos?
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            En Hotel Santa Cecilia, nos enorgullece ofrecer una experiencia única y memorable para nuestros huéspedes. 
                            Ubicados en la Zona Centro de la ciudad de Huejuta de reyes Hidalgo, 
                            somos un destino excepcional que combina lujo, comodidad y hospitalidad de primer nivel.
                            Se fundo el 15 de septiembre de 2010 en Huejutla de Reyes Hidalgo. 
                            El nombre del Hotel Santa Cecilia surge del nombre de la hija del inversionista Lic. Carlos Fayad Ruiz. 
                            Hoy en día es una de las empresas competitivas en el mercado, pertenece a un giro de sector servicios que ofrece hospedaje y restaurant.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={16} sx={{mt: 2}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Vision
                            </Typography>
                            <div className={styles.conNosotros}>    
                                <Typography variant="body2" color="text.secondary" className={styles.vision}>
                                Ser el Hotel más auténtico de la región, 
                                logrando la preferencia y satisfacción a nuestros clientes, 
                                excediendo sus expectativas con un servicio excelente. 
                                </Typography>
                            </div>
                            <Typography gutterBottom variant="h5" component="div">
                                Misión
                            </Typography>
                            <div className={styles.conNosotros}>
                                <Typography variant="body2" color="text.secondary" className={styles.mision}>
                                Ofrecer el mejor servicio de higiene, 
                                confort y calidad a todos nuestros huéspedes y clientes, 
                                satisfacer las necesidades y expectativas a cada uno de ellos, 
                                con la amabilidad y servicio original en un ambiente único y autentico.
                                </Typography>
                            </div>
                            <script src="Acerca.js"></script>
                        </CardContent>
                    </Grid>
                </Grid>              
            </Box>
        </motion.div>
    );
};

export default AcercaDe;
import React, {useState} from 'react'
import {
    Typography,
    Button,
    Link,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box,
    Grid,
    CardMedia
} from '@mui/material/';
import RoomDataService from './Cuartos/room.servicies'
import { useEffect } from 'react';

const DetailPagos = ({payment}) => {
    const [open, setOpen] = useState(false);
    const [room, setRoom] = useState([]);
    const [arrendador, setArrendador] = useState([])

    useEffect (()=> {
        getInfo();
    }, []);

    const getRoom = async (id) => {
        const docSnapRoom = await RoomDataService.getRoomUser(id);
        return docSnapRoom;
    };

    const getUser = async (id) => {
        const docSnapUser = await RoomDataService.getUser(id);
        return docSnapUser;
    };

    const getInfo = async () => {
        const docSnapRoom = await getRoom(payment.idroom);
        const docSnapArren = await getUser(payment.idlessor);

        await setRoom({ id: docSnapRoom.id, ...docSnapRoom.data() })
        await setArrendador({ id: docSnapArren.id, ...docSnapArren.data() })
    };

    const handleClickOpen = () => {
        setOpen(true);
        // getData();
    };

    const handleCloseCancel = () => {
        setOpen(false);
    };

    return (
        <div>          
            <Typography variant='div'>
                <Link sx={{textDecoration:'none',color:'white'}} onClick={handleClickOpen}> Ver información</Link>
            </Typography>
            <Dialog
                open={open}
                onClose={handleCloseCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Vista detallada"}
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description" component={'div'}>
                        <Box component="form" sx={{color:'black'}}>
                            <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                                Detalle del Pago
                            </Typography>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Fecha de pago:</b> {payment.date}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Hora de pago:</b> {payment.hour}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Monto:</b> {payment.pay}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Descripción del pago:</b> {payment.description}
                                </Typography>
                            </Grid>
                            <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                                Detalle del Cuarto
                            </Typography>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Arrendador:</b> {arrendador.nombre} {arrendador.apellidoP} {arrendador.apellidoM}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Costo por mes:</b> {room.precio}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Zona:</b> {room.Zona}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Direccioó:</b> {room.direccion}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Tipo de inmueble:</b> {room.inmueble}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Capacidad:</b> {room.capacidad}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Tipo de compañia:</b> {room.compania}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Baño:</b> {room.baño}
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:1, color: 'gray'}}>
                                <Typography variant='div'>
                                    <b>Servicios:</b> {room.servicios}
                                </Typography>
                            </Grid>
                            <Box sx={{ minWidth: '80%', p:1, display: 'flex', 
                                alignSelf: 'auto', marginLeft: 'auto', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="80%"
                                    sx={{ maxWidth: 410, display: 'block', alignSelf: 'auto'  }}
                                    image={require('../assets/imagen4.jpg')}
                                    alt="Foto 1"
                                />  
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleCloseCancel}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DetailPagos
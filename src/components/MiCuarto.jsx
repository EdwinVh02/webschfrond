import React, {useState, useEffect} from 'react';
import { useAuth } from "../context/authContext";
import { motion } from 'framer-motion';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import Spinner from '../pages/Spinner/Spinner';
import { db } from '../firebase/Firebase';
import {
    collection,
    getDocs,
    query,
    where
} from 'firebase/firestore';
import DetailPagos from './DetailPagos';
import RoomDataService from './Cuartos/room.servicies'

const MiCuarto = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [payment, setPayment] = useState([])
    const [rooms, setRooms] = useState([])

    useEffect (() =>{
        getData();
        if (payment){
            console.log('hay pagos')
            getRoomsList();
        }
    },[]);
    
    const getData = async () => {
        setIsLoading(true);
        const q = query(collection(db, "payments"), where("iduser", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        if (docs.length) {
            await setPayment(docs)
        }
        setIsLoading(false);
    };

    const getRoomsList = async() => {
        const room = [];
        payment.map(async(doc) => {
            const snapRoom =  await getRoom(doc.idroom)
            room.push({ id: snapRoom.id, ...snapRoom.data() })
        })
        await setRooms(room)
    }

    const getRoom = async (id) => {
        const docSnapRoom = await RoomDataService.getRoomUser(id);
        return docSnapRoom;
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <motion.div
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16} alignItems='center' justifyContent= {'center'}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                            Historial de pagos
                        </Typography>

                        {payment.map( (doc) => {
                            var titulo = "";
                            for (const r of rooms){
                                if(r.id === doc.idroom){
                                    titulo = r.titulo;
                                }
                            }
                            const descripcion = doc.description;
                            const description = descripcion.split(':');
                            const fullDescription = `${description[0]}: ${titulo}`;
                            
                            return(
                                <Card sx={{ maxWidth: 850, mt: 2, p: 1 }} key={doc.id}>                       
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {fullDescription}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <b>Id de la factura:</b> {doc.id} <br/>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <b>Fecha del pago:</b> {doc.date}<br/>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <b>Hora del pago:</b> {doc.hour}<br/>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <b>Monto:</b> {doc.pay}<br/>
                                            </Typography>
                                            <Button size='small' variant="contained" sx={{mt:2}}
                                            >
                                                <DetailPagos payment={doc}/>
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </Card>
                            )
                        })}
                        
                    </Grid>
                </Grid>
            </Box> 
        </motion.div>
    )
}

export default MiCuarto
import React, {useState, useEffect} from 'react';
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import Error from '../Alert/Error'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const FormLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState(""); // Nuevo estado para el correo electrónico
    const [password, setPassword] = useState(""); // Nuevo estado para la contraseña
    const [rol, setRol] = useState(""); // Nuevo estado para el rol

    useEffect(() => {
        if (email && password) { // Sólo ejecuta cuando se actualizan email y password
            handleSubmit(); // Ejecutar handleSubmit si email y password están llenos
        }
    }, [email, password]); // Se ejecuta cuando email y password se actualizan

    async function getRol(uid){
        const docRef = doc(db, `usuarios/${uid}`);
        const docuCifrada = await getDoc(docRef);
        const infoFinal = docuCifrada.data().rol;
        return infoFinal;
    }

    const handleSubmit = async () => { // Elimina el parámetro e
        setError("");
        try {
            const userInfo = await login(email, password); // Usar email y password
            getRol(userInfo.user.uid).then((rol) => {
                if(rol==='Arrendador'){
                    navigate("/miscuartos");
                }
                if(rol==='Arrendatario'){
                    navigate("/");
                }
                if(rol==='Administrador'){
                    navigate("/administracion");
                }
            });
        } catch (error) {
            if(error.code === "auth/user-not-found"){
                setError('El correo que ingresaste no existe');
            }
            if(error.code === "auth/wrong-password"){
                setError('La contraseña es incorrecta');
            }  
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    {error && <Error message={error} />}
                    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"      
                            required
                            autoFocus
                            title="Campo correo obligatorio"    
                            fullWidth
                            label="Correo Electronico"
                            type="email"
                            name="email"
                            id='txtEmail'
                            onChange={(e) => setEmail(e.target.value)} // Usar setEmail para actualizar el correo electrónico
                        />
                        <TextField
                            margin="normal"
                            required
                            autoFocus
                            title="Campo contraseña obligatorio" 
                            fullWidth
                            label="Contraseña"
                            type="password"
                            name="password"
                            id='txtPassword'
                            onChange={(e) => setPassword(e.target.value)} // Usar setPassword para actualizar la contraseña
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/recuperacion">
                                    Olvidaste tu contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/cuenta">
                                    No tienes una cuenta?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default FormLogin;

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Key } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { requestLoginAction } from '../_Actions/UserAction';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // const loadList = async () => {
    //     const result = await axios.get("http://localhost:8000/api/uses");
    //     console.log(result, '=====');
    // };

    // console.log(loadList(), '=====ddd');

    const userData = (e, key) => {
        setUser({ ...user, [key]: e.target.value });
    }

    console.log(user, '===ddd');
    const userSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user, 'dddddds');
        dispatch(requestLoginAction(user));

    };


    const { currentUser, error } = useSelector((store) => store.userstore);



    return (
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

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => userData(e, 'email')}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => userData(e, 'password')}
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        onClick={userSubmitHandler}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
import { Box, styled, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const LoginButton = styled(Button)`
    background-color: white;
    padding: 5px 15px;
`;

const Container = styled(Box)`
    margin: 10%;
    text-align: center;
    width: auto;
    height: auto;
`;

const InnerContainer = styled(Box)`
    border-radius: 10px;
    width: auto;
    height: auto;
`;

const DivBox = styled(Box)`
    padding: 1px;
`;

const init = {
    email : '',
    password: ''
}

const base_url = "http://localhost:8080";

const Login = ({ setLoginSignUp, setOpen }) => {

    const [loginCredentials, setLogin] = useState(init);
    const [error, setError] = useState({color: "red", visibility: "hidden"});
    const [message, setMessage] = useState("");

    const { account } = useContext(DataContext);
    const navigate = useNavigate();

    const inputHandler = (event) => {
        setError({color: "red", visibility: "hidden"});
        setLogin({ ...loginCredentials, [event.target.name]: event.target.value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${base_url}/login`, loginCredentials);
            if (response.data.error) {
                setError({color: "red", visibility: "visible"});
                setMessage(response.data.error);
            } else {
                // Successfully logged in, redirect to dashboard
                if (account.userType == "admin") {
                    navigate("/admin/dashboard");
                }
                else {
                    navigate("/user/dashboard");
                }
                setOpen(false);
            }

        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    return (
        <Container>
            <InnerContainer>
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                    <DivBox>
                        <input placeholder='Email' type='email' name='email' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <input placeholder='Password' type='password' name='password' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <LoginButton type='submit'>Login</LoginButton>
                        <Typography>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={() => setLoginSignUp(false)}>SignUp</span></Typography>
                    </DivBox>
                    <span style={error}>{`${message}`}</span>
                </form>
            </InnerContainer>
        </Container>
    )
}

export default Login;
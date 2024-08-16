import { Box, styled, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/DataProvider';

const LoginButton = styled(Button)`
    background-color: white;
    padding: 5px 15px;
`;

const Container = styled(Box)`
    margin: 5%;
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
    name : '',
    email : '',
    password: '',
    cpassword: '',
    userType: ''
}

const base_url = "http://localhost:8080";

const SignUp = ({ setLoginSignUp }) => {

    const [loginCredentials, setSignUp] = useState(init);
    const [error, setError] = useState({color: "red", visibility: "hidden"});
    const [message, setMessage] = useState("");

    const { account } = useContext(DataContext);

    const inputHandler = (event) => {
        setError({color: "red", visibility: "hidden"});
        setSignUp({ ...loginCredentials, [event.target.name]: event.target.value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {

            let updatedCredentials = { ...loginCredentials };

            if (account.userType == "admin") {
                updatedCredentials.userType = "admin";
            } else {
                updatedCredentials.userType = "user";
            }

            // Set the updated state
            setSignUp(updatedCredentials);

            const response = await axios.post(`${base_url}/signup`, updatedCredentials);

            if (response.data.error) {
                setError({color: "red", visibility: "visible"});
                setMessage(response.data.error);
            } else {
                setLoginSignUp(true);
            }

        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    return (
        <Container>
            <InnerContainer>
                <h3>Sign Up</h3>
                <form onSubmit={submitHandler}>
                    <DivBox>
                        <input placeholder='Name' type='text' name='name' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <input placeholder='Email' type='email' name='email' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <input placeholder='Password' type='password' name='password' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <input placeholder='Confirm Password' type='password' name='cpassword' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <LoginButton type='submit'>Sign Up</LoginButton>
                        <Typography>Have an account? <span style={{ cursor: 'pointer' }} onClick={() => setLoginSignUp(true)}>Login</span></Typography>
                    </DivBox>
                    <span style={error}>{`${message}`}</span>
                </form>
            </InnerContainer>
        </Container>
    )
}

export default SignUp;
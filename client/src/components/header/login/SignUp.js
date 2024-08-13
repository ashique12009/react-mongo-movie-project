import { Box, styled, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

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
    cpassword: ''
}

const SignUp = ({ setLoginSignUp }) => {

    const [loginCredentials, setSignUp] = useState(init);

    const inputHandler = (event) => {
        console.log('inputHandler');
        setSignUp({ ...loginCredentials, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submitHandler', loginCredentials);
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
                </form>
            </InnerContainer>
        </Container>
    )
}

export default SignUp;
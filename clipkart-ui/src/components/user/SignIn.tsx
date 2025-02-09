
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, IconButton, Link, Snackbar, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment';
import {inputBaseClasses} from '@mui/material/InputBase'
import React, { useState } from 'react';
import axios from 'axios';
import {STATUS_OK} from '../../constants/HttpStatusCode.ts'
import { MAX_LENGTH_OF_PASSWORD_ } from '../../constants/GenericConstants.ts';

axios.defaults.withCredentials = true;
const api = axios.create({baseURL:import.meta.env.VITE_LOCAL_HOST});
export default function SignIn()
{
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const [isUserNameContainsError, setIsUserNameContainsError] = useState<boolean>(false);
    const [isPasswordContainsError, setIsPasswordContainsError] = useState<boolean>(false);

    const [userNameErrorHelperText, setUserNameErrorHelperText] = useState<string>('');
    const [passwordErrorHelperText, setPasswordErrorHelperText] = useState<string>('');
    
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
    function handleUsername(event : React.ChangeEvent<HTMLInputElement>)
    {
        setUserNameErrorHelperText('');
        setIsUserNameContainsError(false);
        setUserName(event.target.value);
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>)
    {
        setIsPasswordContainsError(false);
        setPasswordErrorHelperText('');
        setPassword(event.target.value);

        const isPasswordValid : boolean = validatePassword();
        if(!isPasswordValid)
        {
          setIsPasswordContainsError(true);
          setPasswordErrorHelperText('password length must be greater than 8 characters.!')
        }
    }

    function validatePassword() : boolean
    {
        return password.length >= MAX_LENGTH_OF_PASSWORD_;
    }

    function handleSubmitButtonClick(event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        setIsUserNameContainsError(false);
        setIsPasswordContainsError(false);

        const isValidUserName : boolean = validateUsername();
        const isValidPassword : boolean = validatePassword();


        if(!isValidUserName || !isValidPassword)
        {
          setIsUserNameContainsError(true);
          setIsPasswordContainsError(true);
          return;
        }

        sendUserData();
    }


    async function sendUserData() 
    {
        try {
            const response  = await api.post('userlogin/login', {"username":userName, "password":password});
            if(response.status === STATUS_OK){
              console.log(response.data);
              setSnackBarOpen(true);
            }
            else{
              console.log('Login failed.!');
            }
        }
        catch (error) {
            console.log(error);

        }
    }

    function validateUsername() : boolean
    {
      const userNameRegEx : RegExp = /^(?!\.)[a-zA-Z0-9._%+-]{1,64}@(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
      return !isNullOrEmpty(userName) && userNameRegEx.test(userName);
    }

    function isNullOrEmpty(str:string)
    {
        return !str || str.trim() === "";
    }

    return <Box  component="form" onSubmit={handleSubmitButtonClick} noValidate autoComplete='off' sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 7, 
        bgcolor: "background.paper",
        boxSizing : 'border-box',
        textAlign: 'center',
        padding: "2rem",
        display: "flex",
        flexDirection:"column",
        gap:2,
        alignItems: "center", 
        justifyContent: "center",
        minWidth:'15vw',
        margin:'auto'
      }}>
          <Typography variant='h4' sx={{fontWeight:"bold", padding:'2px'}}>USER LOGIN</Typography>
          <TextField
          fullWidth
          error={isUserNameContainsError}
          helperText={userNameErrorHelperText}
          id="outlined-suffix-shrink"
          label="Enter email"
          variant="outlined"
          onChange={handleUsername}
          value={userName}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    opacity: 0,
                    pointerEvents: 'none',
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                </InputAdornment>
              ),
            },
          }}
        ></TextField>
      <TextField
        fullWidth
        error={isPasswordContainsError}
        helperText={passwordErrorHelperText}
        id="outlined-suffix-shrink"
        label="Enter password"
        variant="outlined"
        type={showPassword ? 'password' : 'text'}
        value={password}
        onChange={handlePassword}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label={ showPassword ? 'hide the password' : 'display the password'} onClick={() => setShowPassword((show) => !show)}>{showPassword ? <VisibilityOff /> : <Visibility/>}</IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Snackbar open={snackBarOpen} autoHideDuration={3000}>
        <Alert severity='success'>Login Successful.!</Alert>
      </Snackbar>
      <Button type='submit' variant='contained' fullWidth> Submit</Button>
      <Link href='#' underline='hover' sx={{fontSize:'0.875rem'}}>Forgot password ?</Link>
    </Box>;
}
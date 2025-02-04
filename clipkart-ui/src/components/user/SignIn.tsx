
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, Link, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment';
import {inputBaseClasses} from '@mui/material/InputBase'
import React, { useState } from 'react';
import axios from 'axios';

const formContainerStyle:React.CSSProperties = {'display':'flex', 'flexDirection':'column', 'gap' : '15px', 'width':'300px'}

export default function SignIn()
{
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const [isUserNameContainsError, setIsUserNameContainsError] = useState<boolean>(false);
    const [isPasswordContainsError, setIsPasswordContainsError] = useState<boolean>(false);

    const [userNameErrorHelperText, setUserNameErrorHelperText] = useState<string>('');
    const [passwordErrorHelperText, setPasswordErrorHelperText] = useState<string>('');
    

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
        return password.length >= 8;
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

        const isUserLoggedIn : boolean = sendUserData();
        console.log(isUserLoggedIn);
    }

    function sendUserData() : boolean
    {
      axios.post('/UserLogin/Login', {UserName : userName, Password : password})
                    .then((response) => 
                      { 
                        console.log(response);
                        return true;
                      } )
                    .catch((error) => 
                      {
                        console.log(error);
                        return false;
                      });
      return false;
    }

    function validateUsername() : boolean
    {
        return !isNullOrEmpty(userName);
    }

    function isNullOrEmpty(str:string)
    {
        return !str || str.trim() === "";
    }

    return <Box component="form" onSubmit={handleSubmitButtonClick} noValidate autoComplete='off' sx={{
        width: 350,
        p: 3,
        borderRadius: 2,
        boxShadow: 7, 
        bgcolor: "background.paper",
        textAlign: 'center',
        padding: "2rem",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        mt:15,
        ml:75
      }}>
        <div style={formContainerStyle}>
            <Typography variant='h4' sx={{fontWeight:"bold"}}>USER LOGIN</Typography>
        <TextField
        error={isUserNameContainsError}
        helperText={userNameErrorHelperText}
        id="outlined-suffix-shrink"
        label="Enter user name"
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
      />
      <TextField
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
      <Button type='submit' variant='contained' > Submit</Button>
      <Link href='#' underline='hover' sx={{fontSize:'0.875rem'}}>Forgot password ?</Link>
        </div>
            
    </Box>;
}

import { Button, Link, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment';
import {inputBaseClasses} from '@mui/material/InputBase'
import React, { useState } from 'react';

const formContainerStyle:React.CSSProperties = {'display':'flex', 'flexDirection':'column', 'gap' : '15px', 'width':'300px', 'padding':'20px'}

export default function SignIn()
{
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isUserNameContainsError, setIsUserNameContainsError] = useState<boolean>(false);
    const [isPasswordContainsError, setIsPasswordContainsError] = useState<boolean>(false);

    const [userNameErrorHelperText, setUserNameErrorHelperText] = useState<string>('');
    const [passwordErrorHelperText, setPasswordErrorHelperText] = useState<string>('');
    

    function handleUsername(event : React.ChangeEvent<HTMLInputElement>)
    {
        setUserName(event.target.value);
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>)
    {
        setIsPasswordContainsError(false);
        setPassword(event.target.value);
        setPasswordErrorHelperText('');

        const isPasswordValid : boolean = validatePassword(event.target.value);

        if(!isPasswordValid)
        {
            setIsPasswordContainsError(true);
            setPasswordErrorHelperText('password length must be greater than 8 characters.!')
        }
    }

    function validatePassword(passowrd : string)
    {
        return passowrd.length >= 8;
    }

    function handleSubmitButtonClick()
    {
        console.log('submit button clicked.!')
    }

    return <Box component="form" noValidate autoComplete='off' sx={{
        width: 350,
        p: 3,
        borderRadius: 2,
        boxShadow: 3, // Shadow intensity (1-25)
        bgcolor: "background.paper",
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
        value={password}
        onChange={handlePassword}
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
      <Button variant='contained' onClick={handleSubmitButtonClick}> Submit</Button>
      <Link href='#' underline='hover' sx={{fontSize:'0.875rem'}}>Forgot password ?</Link>
        </div>
            
    </Box>;
}
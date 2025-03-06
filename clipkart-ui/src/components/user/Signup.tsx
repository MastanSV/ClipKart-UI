import {
  Box,
  Button,
  InputAdornment,
  inputBaseClasses,
  TextField,
  Typography,
} from '@mui/material';
import SignupProps from '../../types/users/signup';
import React, { useState } from 'react';

export const Signup = React.forwardRef(
  ({ setOpenSignup }: SignupProps, ref) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailId, setEmailId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const emailIdRegExp: RegExp =
      /^(?!\.)[a-zA-Z0-9._%+-]{1,64}@(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    const handleFirstName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setFirstName(e.target.value);
    };

    const handleLastName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setLastName(e.target.value);
    };

    const handleEmailId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setEmailId(e.target.value);
    };

    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmitButtonClick: React.MouseEventHandler<
      HTMLButtonElement
    > = (e) => {
      if (!isNullOrEmpty(emailId) && emailIdRegExp.test(emailId)) {
        console.log('valid email id.');
        setOpenSignup(false);
      } else {
        e.preventDefault();
        console.log(e);
        return;
      }
    };

    function isNullOrEmpty(str: string) {
      return !str || str.trim() === '';
    }

    return (
      <Box
        component="form"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 4,
          boxShadow: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', padding: '2px', textAlign: 'center' }}
        >
          Sign up
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          label="First name"
          onChange={handleFirstName}
          value={firstName}
        ></TextField>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          label="Last name"
          onChange={handleLastName}
          value={lastName}
        ></TextField>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleEmailId}
          value={emailId}
          label="Email Id"
        ></TextField>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          onChange={handlePassword}
          value={password}
          label="Password"
        ></TextField>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          onClick={handleSubmitButtonClick}
        >
          Signup
        </Button>
      </Box>
    );
  }
);

export default Signup;

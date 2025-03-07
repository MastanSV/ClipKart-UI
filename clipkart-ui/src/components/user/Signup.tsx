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
    const [firstNameHelperText, setFirstNameHelperText] = useState<string>();
    const [firstNameHasError, setFirstNameHasError] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>('');
    const [lastNameHelperText, setLastNameHelperText] = useState<string>();
    const [lastNameHasError, setLastNameHasError] = useState<boolean>();
    const [emailId, setEmailId] = useState<string>('');
    const [emailIdHelperText, setEmailIdHelperText] = useState<string>();
    const [emaildHasError, setEmailIdHasError] = useState<boolean>();
    const [password, setPassword] = useState<string>('');
    const [passwordHelperText, setPasswordHelperText] = useState<string>();
    const [passwordHasError, setPasswordHasError] = useState<boolean>();

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
      setFirstNameHasError(false);
      setFirstNameHelperText('');
      setLastNameHasError(false);
      setLastNameHelperText('');
      setEmailIdHasError(false);
      setEmailIdHelperText('');
      setPasswordHasError(false);
      setPasswordHelperText('');

      e.preventDefault();
      if (isNullOrEmpty(firstName)) {
        setFirstNameHelperText('first name required.');
        setFirstNameHasError(true);
      }
      if (isNullOrEmpty(lastName)) {
        setLastNameHelperText('Last name required.');
        setLastNameHasError(true);
      }
      if (isNullOrEmpty(emailId)) {
        setEmailIdHelperText('email id required.');
        setEmailIdHasError(true);
      }
      if (isNullOrEmpty(password)) {
        setPasswordHelperText('password required.');
        setPasswordHasError(true);
      } else if (!isNullOrEmpty(emailId) && emailIdRegExp.test(emailId)) {
        console.log('valid email id.');
        setOpenSignup(false);
      } else {
        setEmailIdHelperText('Please enter valid emailId.');
        setEmailIdHasError(true);
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
          error={firstNameHasError}
          helperText={firstNameHelperText}
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          label="First name"
          onChange={handleFirstName}
          value={firstName}
        ></TextField>
        <TextField
          error={lastNameHasError}
          helperText={lastNameHelperText}
          fullWidth
          sx={{ mb: 2 }}
          label="Last name"
          onChange={handleLastName}
          value={lastName}
        ></TextField>
        <TextField
          error={emaildHasError}
          helperText={emailIdHelperText}
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleEmailId}
          value={emailId}
          label="Email Id"
        ></TextField>
        <TextField
          error={passwordHasError}
          helperText={passwordHelperText}
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

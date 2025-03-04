import {
  Box,
  Button,
  InputAdornment,
  inputBaseClasses,
  TextField,
  Typography,
} from '@mui/material';
import SignupProps from '../../types/users/signup';
import { useState } from 'react';

function Signup({ setOpenSignup }: SignupProps) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const handleSubmitButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    setOpenSignup(false);
    console.log(e);
  };

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

export default Signup;

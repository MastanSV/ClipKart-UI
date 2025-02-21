import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
  Icon,
  Badge,
  Tooltip,
  Modal,
} from '@mui/material';
import { styled, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { IAppBarSearchElementProps } from '../../types/common/appbar';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react';
import SignIn from '../user/SignIn';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: '5ch',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ClipKartAppBar({
  handleOnChangeSearchInput,
  cartCount,
}: IAppBarSearchElementProps) {
  const [loginClick, setLoginClick] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);

  function handleLoginClick() {
    setOpen(true);
  }

  function handleModalColse() {
    setOpen(false);
  }

  return (
    <AppBar position="static" sx={{ mb: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clip Kart
        </Typography>
        <Tooltip title="viewcart">
          <IconButton
            size="large"
            aria-label="show 0 items in the cart"
            color="inherit"
          >
            <Typography variant="button" sx={{ mr: 1, mt: 0.5, fontSize: 15 }}>
              cart
            </Typography>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>
            </Badge>
          </IconButton>
        </Tooltip>

        <Search>
          <SearchIconWrapper>
            <SearchIcon></SearchIcon>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleOnChangeSearchInput}
          />
        </Search>
        <Button color="inherit" onClick={handleLoginClick}>
          Login
        </Button>
        <Modal open={open} onClose={handleModalColse}>
          <SignIn />
        </Modal>
      </Toolbar>
    </AppBar>
  );
}

export default ClipKartAppBar;

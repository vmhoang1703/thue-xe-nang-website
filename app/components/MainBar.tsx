"use client"

import { styled, alpha, Theme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

interface CustomTheme extends Theme { 
  spacing: (value: number) => number; 
  shape: {
    borderRadius: number; 
  };
}

const Search = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  border: '1px solid #000',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 60,
  width: '250px',
}));

const SearchIconWrapper = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'gray'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const MainBar = () => {
  return (
    <div>
      <AppBar position="static" sx={styles.mainbar}>
        <Container maxWidth="xl" sx={styles.container}>
          <Image src={'/logo.png'} alt={'Logo Image'} width={270} height={75} priority/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Container>
      </AppBar>
    </div>
  );
};

const styles = {
  mainbar: {
    backgroundColor: "#F5F3F3",
    padding: "35px"
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default MainBar;

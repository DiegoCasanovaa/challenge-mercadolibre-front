import React from 'react';
import { RoutesApp } from './routes/routes';
import { NavBar } from './components/navBar/NavBar';
import { Container } from '@mui/material';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Container maxWidth={false} disableGutters sx={{ backgroundColor: '#EEEEEE', minHeight:'100vh'}}>
      <RecoilRoot>
      <NavBar />
        <RoutesApp />
      </RecoilRoot>
    </Container>
  );
}

export default App;

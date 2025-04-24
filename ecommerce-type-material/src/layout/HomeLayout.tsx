import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeLayout;

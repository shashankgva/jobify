import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, mt: 'auto' }}>
      <Typography variant="body1" align="center" color="text.secondary">
        &copy; 2023 MyStore. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { TokensList } from '../../components/TokensList';

const TokensPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Токены
        </Typography>
        <TokensList />
      </Box>
    </Container>
  );
};

export default TokensPage; 
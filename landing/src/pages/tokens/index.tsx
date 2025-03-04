import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { TokensList } from '../../сomponents/TokensList';

const TokensPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <TokensList />
      </Box>
    </Container>
  );
};

export default TokensPage; 
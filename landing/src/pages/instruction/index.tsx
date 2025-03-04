import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const InstructionPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Инструкция
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Здесь будет страница с инструкциями
        </Typography>
      </Box>
    </Container>
  );
};

export default InstructionPage; 
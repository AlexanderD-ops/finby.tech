
import { Container, Typography, Box } from '@mui/material';

export const TokensList = () => {
    return (
        <Container maxWidth="xl">
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Токены
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Здесь будет страница с токенами
            </Typography>
          </Box>
        </Container>
      );
}   

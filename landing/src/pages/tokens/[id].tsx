import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Box, 
  Typography, 
  Chip,
  IconButton,
  ButtonGroup,
  Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { TokenStats } from '../../components/TokenStats';

interface Token {
  id: number;
  name: string;
  icon: string;
  tags: string[];
  currentPrice: number;
  targetPrice: number;
  expirationDate: string;
  riskLevel: string;
  returns: {
    day: number;
    week: number;
    month: number;
  };
  description: string;
  historicalReturns: Array<{
    value: number;
    period: string;
  }>;
}

type TokensData = {
  [key: number]: Token;
};

const MOCK_DATA: TokensData = {
  1: {
    id: 1,
    name: "SHR",
    icon: "🦍",
    tags: ["Восстановление российского рынка"],
    currentPrice: 8377,
    targetPrice: 8548,
    expirationDate: "26 Дек. 2024",
    riskLevel: "Агрессивный",
    returns: {
      day: -0.73,
      week: 1.173,
      month: 1.73
    },
    description: "Стратегия фокусируется на заработке от восстановления рынка ММВБ после кризисов, используя трендовые алгоритмы с ограниченными рисками и неограниченной прибылью. Портфель диверсифицирован по стилям (акции стоимости и роста) и секторам экономики для снижения волатильности.",
    historicalReturns: [
      { value: -20.73, period: "за 4.24" },
      { value: -4.73, period: "за 3.24" },
      { value: -3.73, period: "за 2.24" },
      { value: 1.73, period: "за 1.24" }
    ]
  }
};

const getReturnColor = (value: number): string => {
  return value >= 0 ? '#4CAF50' : '#F44336';
};

export const TokenPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const token = id ? MOCK_DATA[Number(id)] : undefined;

  if (!token) {
    return (
      <Container maxWidth="lg">
        <Typography>Токен не найден</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: '#fff' }}>
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <IconButton 
            onClick={() => navigate('/tokens')}
            sx={{ 
              color: '#000',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" sx={{ 
            fontFamily: 'Oswald',
            color: '#000',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}>
            {token.name}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 4,
          mb: 4
        }}>
          <Box>
            <TokenStats
              currentPrice={token.currentPrice}
              targetPrice={token.targetPrice}
              expirationDate={token.expirationDate}
              riskLevel={token.riskLevel}
              returns={token.returns}
            />
            <Chip
              label={token.tags[0]}
              sx={{
                backgroundColor: '#4285F4',
                color: 'white',
                borderRadius: '16px',
                fontSize: '0.875rem',
                height: '32px',
                mt: 2,
                fontFamily: 'Oswald'
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ 
              color: '#000',
              fontSize: '1rem',
              lineHeight: 1.7,
              mb: 4
            }}>
              {token.description}
            </Typography>

            <Typography sx={{ 
              color: '#000',
              fontWeight: 'medium',
              mb: 2,
              fontSize: '1.125rem'
            }}>
              Историческая доходность %
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {token.historicalReturns.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ 
                    color: getReturnColor(item.value),
                    fontWeight: 'medium',
                  }}>
                    {item.value >= 0 ? '↑' : '↓'} {Math.abs(item.value)}
                  </Typography>
                  <Typography sx={{ 
                    color: '#6B7280',
                  }}>
                    {item.period}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ 
            color: '#000',
            fontWeight: 'bold',
            mb: 2
          }}>
            Динамика стоимости {token.name}
          </Typography>
          
          <ButtonGroup sx={{ mb: 2 }}>
            <Button sx={{ 
              color: '#6B7280',
              borderColor: '#E5E7EB',
              '&:hover': {
                borderColor: '#E5E7EB',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}>
              24ч
            </Button>
            <Button sx={{ 
              color: '#6B7280',
              borderColor: '#E5E7EB',
              '&:hover': {
                borderColor: '#E5E7EB',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}>
              7д
            </Button>
            <Button sx={{ 
              color: '#fff',
              backgroundColor: '#2196F3',
              '&:hover': {
                backgroundColor: '#1976D2'
              }
            }}>
              30д
            </Button>
            <Button sx={{ 
              color: '#6B7280',
              borderColor: '#E5E7EB',
              '&:hover': {
                borderColor: '#E5E7EB',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}>
              365д
            </Button>
          </ButtonGroup>

          <Box sx={{ 
            height: '400px',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            p: 3
          }}>
            {/* Здесь будет график */}
            <Typography sx={{ color: '#6B7280' }}>
              График будет добавлен позже
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ color: '#6B7280' }}>
            Дней сравнения с индексом: 1114
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}; 
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
    name: "Bored Ape Yacht Club",
    icon: "/images/tokens/bored-ape.png",
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
      { value: -20.73, period: "кв.4.24" },
      { value: -4.73, period: "кв.3.24" },
      { value: -3.73, period: "кв.2.24" },
      { value: 1.73, period: "кв.1.24" }
    ]
  },
  2: {
    id: 2,
    name: "Mutant Ape Yacht Club",
    icon: "/images/tokens/mutant-ape.png",
    tags: ["Восстановление российского рынка"],
    currentPrice: 8377,
    targetPrice: 8548,
    expirationDate: "26 Дек. 2024",
    riskLevel: "Агрессивный",
    returns: {
      day: 8.51,
      week: 1.173,
      month: 1.73
    },
    description: "Стратегия фокусируется на заработке от восстановления рынка ММВБ после кризисов, используя трендовые алгоритмы с ограниченными рисками и неограниченной прибылью. Портфель диверсифицирован по стилям (акции стоимости и роста) и секторам экономики для снижения волатильности.",
    historicalReturns: [
      { value: -20.73, period: "кв.4.24" },
      { value: -4.73, period: "кв.3.24" },
      { value: -3.73, period: "кв.2.24" },
      { value: 1.73, period: "кв.1.24" }
    ]
  },
  3: {
    id: 3,
    name: "Wrapped BTC",
    icon: "/images/tokens/wrapped-btc.png",
    tags: ["Затаившийся дракон", "Восстановление российского рынка"],
    currentPrice: 8377,
    targetPrice: 8548,
    expirationDate: "26 Дек. 2024",
    riskLevel: "Агрессивный",
    returns: {
      day: -8.51,
      week: 1.173,
      month: 1.73
    },
    description: "Стратегия фокусируется на заработке от восстановления рынка ММВБ после кризисов, используя трендовые алгоритмы с ограниченными рисками и неограниченной прибылью. Портфель диверсифицирован по стилям (акции стоимости и роста) и секторам экономики для снижения волатильности.",
    historicalReturns: [
      { value: -20.73, period: "кв.4.24" },
      { value: -4.73, period: "кв.3.24" },
      { value: -3.73, period: "кв.2.24" },
      { value: 1.73, period: "кв.1.24" }
    ]
  },
  4: {
    id: 4,
    name: "Lido DAO Token",
    icon: "/images/tokens/lido-dao.png",
    tags: ["Топ-15 акций в кризис", "Затаившийся дракон"],
    currentPrice: 8377,
    targetPrice: 8548,
    expirationDate: "26 Дек. 2024",
    riskLevel: "Агрессивный",
    returns: {
      day: -8.51,
      week: 1.173,
      month: 1.73
    },
    description: "Стратегия фокусируется на заработке от восстановления рынка ММВБ после кризисов, используя трендовые алгоритмы с ограниченными рисками и неограниченной прибылью. Портфель диверсифицирован по стилям (акции стоимости и роста) и секторам экономики для снижения волатильности.",
    historicalReturns: [
      { value: -20.73, period: "кв.4.24" },
      { value: -4.73, period: "кв.3.24" },
      { value: -3.73, period: "кв.2.24" },
      { value: 1.73, period: "кв.1.24" }
    ]
  },
  5: {
    id: 5,
    name: "Lido Staked Ether",
    icon: "/images/tokens/lido-staked.png",
    tags: ["Затаившийся дракон"],
    currentPrice: 8377,
    targetPrice: 8548,
    expirationDate: "26 Дек. 2024",
    riskLevel: "Агрессивный",
    returns: {
      day: -8.51,
      week: 1.173,
      month: 1.73
    },
    description: "Стратегия фокусируется на заработке от восстановления рынка ММВБ после кризисов, используя трендовые алгоритмы с ограниченными рисками и неограниченной прибылью. Портфель диверсифицирован по стилям (акции стоимости и роста) и секторам экономики для снижения волатильности.",
    historicalReturns: [
      { value: -20.73, period: "кв.4.24" },
      { value: -4.73, period: "кв.3.24" },
      { value: -3.73, period: "кв.2.24" },
      { value: 1.73, period: "кв.1.24" }
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
                mt: 4,
                mb: 3,
                fontFamily: 'Oswald'
              }}
            />
            
            <Typography sx={{ 
              color: '#000',
              fontWeight: 'medium',
              mb: 2,
              fontSize: '1.125rem'
            }}>
              Историческая доходность %
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4 }}>
              {[
                { value: -20.73, period: "кв.4.24" },
                { value: -4.73, period: "кв.3.24" },
                { value: -3.73, period: "кв.2.24" },
                { value: 1.73, period: "кв.1.24" },
                { value: 1.73, period: "кв.4.23" },
                { value: 1.73, period: "кв.3.23" },
                { value: 1.73, period: "кв.2.23" },
                { value: 1.73, period: "кв.1.23" },
                { value: 1.73, period: "кв.4.22" },
                { value: 1.73, period: "кв.3.22" },
                { value: 1.73, period: "кв.2.22" },
                { value: 1.73, period: "кв.1.22" }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ 
                    color: getReturnColor(item.value),
                    fontSize: '1rem',
                    fontWeight: 'medium'
                  }}>
                    {item.value >= 0 ? '↑' : '↓'} {Math.abs(item.value)}
                  </Typography>
                  <Typography sx={{ 
                    color: '#9CA3AF',
                    fontSize: '0.875rem'
                  }}>
                    {item.period}
                  </Typography>
                </Box>
              ))}
            </Box>
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
          </Box>
        </Box>

        <Box sx={{ 
          backgroundColor: '#fff',
          border: '1px solid #E5E7EB',
          borderRadius: '16px',
          p: 3,
          mb: 4 
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography sx={{ 
              color: '#000',
              fontSize: '1.25rem',
              fontFamily: 'Oswald',
              fontWeight: 'medium'
            }}>
              Динамика стоимости {token.name}
            </Typography>
            
            <ButtonGroup 
              variant="outlined"
              sx={{ 
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <Button sx={{ 
                color: '#6B7280',
                borderColor: '#E5E7EB',
                fontSize: '0.875rem',
                minWidth: '64px',
                padding: '6px 16px',
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
                fontSize: '0.875rem',
                minWidth: '64px',
                padding: '6px 16px',
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
                fontSize: '0.875rem',
                minWidth: '64px',
                padding: '6px 16px',
                '&:hover': {
                  backgroundColor: '#1976D2'
                }
              }}>
                30д
              </Button>
              <Button sx={{ 
                color: '#6B7280',
                borderColor: '#E5E7EB',
                fontSize: '0.875rem',
                minWidth: '64px',
                padding: '6px 16px',
                '&:hover': {
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}>
                365д
              </Button>
            </ButtonGroup>
          </Box>

          <Box sx={{ 
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Typography sx={{ 
              color: '#6B7280',
              fontSize: '0.875rem'
            }}>
              Средняя стоимость ( ₽ )
            </Typography>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: '#6B7280' }}>
                График будет добавлен позже
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ 
            color: '#000',
            fontSize: '0.875rem',
            fontWeight: 'bold'
          }}>
            Дней сравнения с индексом: 1114
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}; 
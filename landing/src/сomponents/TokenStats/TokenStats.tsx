import React from 'react';
import { Box, Typography } from '@mui/material';

interface TokenStatsProps {
  currentPrice: number;
  targetPrice: number;
  expirationDate: string;
  riskLevel: string;
  returns: {
    day: number;
    week: number;
    month: number;
  };
}

export const TokenStats: React.FC<TokenStatsProps> = ({
  currentPrice,
  targetPrice,
  expirationDate,
  riskLevel,
  returns
}) => {
  const getArrow = (value: number) => value >= 0 ? '↑' : '↓';

  return (
    <Box sx={{ 
      position: 'relative',
      minWidth: '480px',
      maxWidth: '100%',
      width: 'auto',
      height: '200.79px',
      background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 0%, #FFFFFF 100%)',
      boxShadow: '4px 5px 6px rgba(0, 0, 0, 0.05)',
      borderRadius: '25px',
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        position: 'absolute',
        left: '35px',
        right: '35px',
        top: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '6px',
        height: '150px',
      }}>
        {/* Левая колонка с заголовками */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '19px',
          width: '210px',
          flexShrink: 0,
          height: '160px',
        }}>
          <Typography sx={{ 
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#000000'
          }}>
            Текущая стоимость
          </Typography>
          <Typography sx={{ 
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#000000'
          }}>
            Дата экспирации
          </Typography>
          <Typography sx={{ 
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#000000'
          }}>
            Уровень риска
          </Typography>
          <Typography sx={{ 
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#000000'
          }}>
            Текущая доходность %
          </Typography>
        </Box>

        {/* Правая колонка со значениями */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '15px',
          width: '280px',
          flexShrink: 0,
          height: '141px'
        }}>
          <Typography sx={{ 
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '24px',
            color: '#000000',
            alignSelf: 'stretch'
          }}>
            {currentPrice} ₽ / {targetPrice} ₽
          </Typography>
          <Typography sx={{ 
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#000000'
          }}>
            {expirationDate}
          </Typography>
          <Typography sx={{ 
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#000000'
          }}>
            {riskLevel}
          </Typography>

          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            whiteSpace: 'nowrap',
            width: '100%',
            overflow: 'hidden'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component="span" sx={{ 
                fontWeight: 700,
                fontSize: '14px',
                color: '#FF1E1E',
                display: 'inline'
              }}>
                {getArrow(returns.day)} {Math.abs(returns.day)}
              </Typography>
              <Typography component="span" sx={{ 
                ml: '4px',
                fontSize: '12px',
                color: '#9CA3AF',
                display: 'inline'
              }}>
                День
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component="span" sx={{ 
                fontWeight: 700,
                fontSize: '14px',
                color: '#0FCB6D',
                display: 'inline'
              }}>
                {getArrow(returns.week)} {returns.week}
              </Typography>
              <Typography component="span" sx={{ 
                ml: '4px',
                fontSize: '12px',
                color: '#9CA3AF',
                display: 'inline'
              }}>
                Неделя
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component="span" sx={{ 
                fontWeight: 700,
                fontSize: '14px',
                color: '#0FCB6D',
                display: 'inline'
              }}>
                {getArrow(returns.month)} {returns.month}
              </Typography>
              <Typography component="span" sx={{ 
                ml: '4px',
                fontSize: '12px',
                color: '#9CA3AF',
                display: 'inline'
              }}>
                Месяц
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 
import React from 'react';
import { 
  Box, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Typography
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface Token {
  id: number;
  name: string;
  icon: string;
  tags: string[];
  price: number;
  change: number;
}

const MOCK_DATA: Token[] = [
  {
    id: 1,
    name: "Bored Ape Yacht Club",
    icon: "/images/tokens/bored-ape.png",
    tags: ["Восстановление российского рынка"],
    price: 11.56,
    change: -8.51
  },
  {
    id: 2,
    name: "Mutant Ape Yacht Club",
    icon: "/images/tokens/mutant-ape.png",
    tags: ["Восстановление российского рынка"],
    price: 11.56,
    change: 8.51
  },
  {
    id: 3,
    name: "Wrapped BTC",
    icon: "/images/tokens/wrapped-btc.png",
    tags: ["Затаившийся дракон", "Восстановление российского рынка"],
    price: 11.56,
    change: -8.51
  },
  {
    id: 4,
    name: "Lido DAO Token",
    icon: "/images/tokens/lido-dao.png",
    tags: ["Топ-15 акций в кризис", "Затаившийся дракон"],
    price: 11.56,
    change: -8.51
  },
  {
    id: 5,
    name: "Lido Staked Ether",
    icon: "/images/tokens/lido-staked.png",
    tags: ["Затаившийся дракон"],
    price: 11.56,
    change: -8.51
  }
];

const getTokenIcon = (id: number): string => {
  switch(id) {
    case 1:
    case 2:
      return '🦍';
    case 3:
      return '₿';
    case 4:
      return '🔷';
    default:
      return '⟠';
  }
};

const getTagColor = (tag: string): string => {
  switch(tag) {
    case 'Затаившийся дракон':
      return '#F44336';
    case 'Топ-15 акций в кризис':
      return '#4CAF50';
    default:
      return '#4285F4';
  }
};

export const TokensList = () => {
  return (
    <TableContainer component={Paper} sx={{ 
      backgroundColor: '#fff',
      borderRadius: 2, 
      mt: 3,
      boxShadow: 'none',
      borderTop: '1px solid #E5E7EB',
      borderBottom: '1px solid #E5E7EB',
      '& .MuiTableCell-root': {
        borderLeft: 'none',
        borderRight: 'none'
      }
    }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#6B7280', fontWeight: 500 }}>#</TableCell>
            <TableCell sx={{ color: '#6B7280', fontWeight: 500 }}>Название токена</TableCell>
            <TableCell sx={{ color: '#6B7280', fontWeight: 500 }}>Инвест-идеи</TableCell>
            <TableCell sx={{ color: '#6B7280', fontWeight: 500 }}>Цена</TableCell>
            <TableCell sx={{ color: '#6B7280', fontWeight: 500 }}>Динамика роста</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MOCK_DATA.map((token) => (
            <TableRow 
              key={token.id}
              sx={{ 
                '&:hover': { backgroundColor: '#EFF6FF' }
              }}
            >
              <TableCell sx={{ color: '#6B7280' }}>{token.id}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#F3F4F6',
                      fontSize: '20px'
                    }}
                  >
                    {getTokenIcon(token.id)}
                  </Box>
                  <Typography 
                    variant="body1" 
                    component="span" 
                    sx={{ 
                      fontWeight: 500,
                      color: '#374151',
                      fontFamily: 'Oswald'
                    }}
                  >
                    {token.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {token.tags.map((tag, index) => (
                    <Chip
                      key={`${token.id}-${index}`}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: getTagColor(tag),
                        color: 'white',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        height: '24px'
                      }}
                    />
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ color: '#374151' }}>
                  USD ${token.price.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: token.change >= 0 ? '#4CAF50' : '#F44336',
                    fontWeight: 500
                  }}
                >
                  {token.change >= 0 ? '+' : ''}{token.change}%
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    size="small" 
                    sx={{ 
                      color: '#6B7280',
                      backgroundColor: '#F3F4F6',
                      width: '32px',
                      height: '32px',
                      '&:hover': { 
                        color: '#374151',
                        backgroundColor: '#E5E7EB'
                      }
                    }}
                  >
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                  <IconButton 
                    size="small"
                    sx={{ 
                      color: '#6B7280',
                      backgroundColor: '#F3F4F6',
                      width: '32px',
                      height: '32px',
                      '&:hover': { 
                        color: '#374151',
                        backgroundColor: '#E5E7EB'
                      }
                    }}
                  >
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 
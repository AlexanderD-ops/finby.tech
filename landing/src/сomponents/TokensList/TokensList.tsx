import React, { useState } from 'react';
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
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Container
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

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

const FILTERS = [
  "Все инвест-идеи",
  "Восстановление российского рынка",
  "Затаившийся дракон",
  "Топ-15 акций в кризис",
  "Топ акций под дивиденды"
];

export const TokensList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Все инвест-идеи"]);

  const handleFilterChange = (filter: string) => {
    if (filter === "Все инвест-идеи") {
      setSelectedFilters(["Все инвест-идеи"]);
      return;
    }

    setSelectedFilters(prev => {
      // Убираем "Все инвест-идеи" если выбран другой фильтр
      const newFilters = prev.filter(f => f !== "Все инвест-идеи");
      
      if (prev.includes(filter)) {
        return newFilters.filter(f => f !== filter);
      } else {
        return [...newFilters, filter];
      }
    });
  };

  const handleTokenClick = (tokenId: number) => {
    navigate(`/tokens/${tokenId}`);
  };

  const filteredData = MOCK_DATA.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters = selectedFilters.includes("Все инвест-идеи") || 
      token.tags.some(tag => selectedFilters.includes(tag));
    return matchesSearch && matchesFilters;
  });

  return (
    <Container maxWidth="lg">
      <Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder=""
            variant="standard"
            hiddenLabel
            autoComplete="off"
            inputProps={{
              autoComplete: 'off',
              'aria-autocomplete': 'none',
              spellCheck: 'false'
            }}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              '& .MuiInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
                borderBottom: '1px solid #E5E7EB',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  color: '#374151',
                  padding: '8px 0',
                  '&::placeholder': {
                    color: '#374151',
                    opacity: 1
                  }
                }
              },
              '& .MuiFormHelperText-root': {
                display: 'none'
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#6B7280' }} />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton 
                    size="small" 
                    onClick={() => setSearchQuery('')}
                    sx={{ 
                      color: '#6B7280',
                      backgroundColor: '#F3F4F6',
                      width: '24px',
                      height: '24px',
                      mr: 1,
                      '&:hover': {
                        backgroundColor: '#E5E7EB'
                      },
                      '&:focus': {
                        outline: 'none'
                      }
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>

        <Typography sx={{ 
          color: '#9CA3AF',
          mb: 2,
          fontWeight: 600,
          fontSize: '14px'
        }}>
          Фильтровать по инвест-идеям
        </Typography>

        <Box sx={{ mb: 3 }}>
          <FormGroup row sx={{ gap: 2 }}>
            {FILTERS.map((filter) => (
              <FormControlLabel
                key={filter}
                control={
                  <Checkbox
                    checked={selectedFilters.includes(filter)}
                    onChange={() => handleFilterChange(filter)}
                    sx={{
                      '&.Mui-checked': {
                        color: '#2563EB',
                      },
                    }}
                  />
                }
                label={filter}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: '#374151',
                    fontSize: '14px'
                  }
                }}
              />
            ))}
          </FormGroup>
        </Box>

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
              {filteredData.map((token) => (
                <TableRow 
                  key={token.id}
                  onClick={() => handleTokenClick(token.id)}
                  sx={{ 
                    '&:hover': { backgroundColor: '#EFF6FF' },
                    cursor: 'pointer'
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
                            fontFamily: 'Oswald',
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
      </Box>
    </Container>
  );
}; 
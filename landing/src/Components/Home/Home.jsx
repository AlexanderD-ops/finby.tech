import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import okImage from '../../static/Ok.jpg';
import { WhatIsTokens } from './WhatIsTokens';
import { TokenStrategyBenefits } from './TokenStrategyBenefits';
import { TokenStrategyTypes } from './TokenStrategyTypes';
import { BuyTokens } from './BuyTokens';
import { WhySelectUs } from './WhySelectUs';
import Tokens from './Tokens';

const useStyles = makeStyles({
  home: {
    backgroundColor: '#fff',
  },
  description: {
    fontFamily: 'Open sans',
    fontSize: '32px',
    lineHeight: '44px',
    '@media (max-width: 960px)': {
      fontSize: '28px',
      lineHeight: '28px',
    },
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '72px',
    fontWeight: '700',
    lineHeight: '78px',
    marginBottom: '35px',
    width: '100%',
    '@media (max-width: 960px)': {
      fontSize: '42px',
      lineHeight: '48px',
    },
  },
  container: {
    display: 'flex',
    marginTop: '80px',
    marginBottom: '80px',
  },
  okImageContainer: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Container>
        <div className={classes.container}>
          <div>
            <div className={classes.title}>
              Инвестируйте в будущее с Финам токены
            </div>
            <div className={classes.description}>
              Единственный в <b>Беларуси</b> сервис токен-стратегий, основанных на реальных активах компаний.
            </div>
          </div>
          <div className={classes.okImageContainer}>
            <img src={okImage} alt="ok" />
          </div>
        </div>
      </Container>
      <WhatIsTokens />
      <Tokens />
      <TokenStrategyBenefits />
      <TokenStrategyTypes />
      <BuyTokens />
      <WhySelectUs />
    </div>
  );
};

export default Home;
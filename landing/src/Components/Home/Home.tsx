import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import okImage from '../../assets/images/Ok.jpg';
import { WhatIsTokens } from '../WhatIsTokens';
import { TokenStrategyBenefits } from '../TokenStrategyBenefits';
import { TokenStrategyTypes } from '../TokenStrategyTypes';
import { BuyTokens } from '../BuyTokens';
import { WhySelectUs } from '../WhySelectUs';
import Tokens from '../Tokens';
import { NavLink } from 'react-router-dom';

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
  footerContainer: {
    padding: '40px 0',
    minHeight: '200px',
    backgroundColor: '#FAFAFA',
  },
  footer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: "#000 !important",
    marginRight: '15px',
    textDecoration: 'none',
  }
});

export const Home: React.FC = () => {
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
      <div className={classes.footerContainer}>
        <Container>
          <div className={classes.footer}>
            <div>Copyright © 2024</div>
            <div>
              <NavLink to="/" className={classes.footerLink}>О сервисе</NavLink>
              <a href="https://near.org/" target='_blank' className={classes.footerLink} rel="noreferrer">NEAR</a>
              <a target='_blank' className={classes.footerLink} rel="noreferrer"
              href="https://www.finam.ru/landings/open-order-new/?AgencyBackOfficeID=1&agent=46504c8f-c84d-4e01-bef2-b8eef1b51d26" >
                ФИНАМ
              </a>
              <NavLink to="/link3" className={classes.footerLink}>White Paper</NavLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
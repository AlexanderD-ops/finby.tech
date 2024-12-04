import React from 'react';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import logo from '../../static/finamlogo.png';
import vector from '../../static/Vector.png';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '10px'
  },
  logoContainer: {
    flex: 0,
    '@media (max-width: 960px)': {
      flex: 'initial',
    },
  },
  logo: {
    marginRight: '120px',
    height: '110px',
    '@media (max-width: 960px)': {
      marginRight: '0',
      height: '90px',
    },
  },
  linksContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '50px',
    '@media (max-width: 960px)': {
      gap: '15px',
      flexDirection: 'column',
      flex: 'initial',
      alignItems: 'flex-end',
    },
  },
  pageLinks: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 960px)': {
      gap: '20px',
    },
  },
  link: {
    color: '#000 ',
    textDecoration: 'none',
    padding: '2px 0',
    '&:hover': {
      borderBottom: '1px solid #1970B5',
    },
    '&.active': {
      borderBottom: '2px solid #1970B5',
    },
  },
  buttonSignIn: {
    color: '#000',
    textDecoration: 'none',
    padding: '15px 26px 15px 19px',
    fontWeight: '700',
  },
  buttonSignUp: {
    color: '#fff',
    background: 'radial-gradient(66.71% 66.71% at 50% 50%, rgba(25, 112, 181, 0.65) 0%, #1970B5 100%)',
    borderRadius: '15px',
    padding: '15px 19px',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '22px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  authBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.linksContainer}>
          <div className={classes.pageLinks}>
            <NavLink exact to="/" className={classes.link} activeClassName="active">Главная</NavLink>
            <NavLink to="/link1" className={classes.link} activeClassName="active">Токены</NavLink>
            <NavLink to="/link2" className={classes.link} activeClassName="active">Инструкция</NavLink>
            <NavLink to="/link3" className={classes.link} activeClassName="active">О нас</NavLink>
          </div>
          <div className={classes.authBtns}>
            <NavLink to="/" className={classes.buttonSignIn}>Войти</NavLink>
            <NavLink className={classes.buttonSignUp}>Регистрация <img src={vector} /></NavLink>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default Header;
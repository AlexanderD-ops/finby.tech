import React, { useState } from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { LoginModal } from '../LoginModal/LoginModal';
import { RegisterModal } from '../RegisterModal/RegisterModal';
import logo from '../../assets/images/finamlogo.png';
import vector from '../../assets/images/Vector.png';

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
        color: '#000',
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
        cursor: 'pointer',
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

export const Header: React.FC = () => {
    const classes = useStyles();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsRegisterModalOpen(false);
        setIsLoginModalOpen(true);
    };

    const handleRegisterClick = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(true);
    };

    return (
        <>
            <Container className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.logoContainer}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </div>
                    <div className={classes.linksContainer}>
                        <div className={classes.pageLinks}>
                            <NavLink to="/" className={({ isActive }) => isActive ? `${classes.link} active` : classes.link}>Главная</NavLink>
                            <NavLink to="/tokens" className={({ isActive }) => isActive ? `${classes.link} active` : classes.link}>Токены</NavLink>
                            <NavLink to="/instruction" className={({ isActive }) => isActive ? `${classes.link} active` : classes.link}>Инструкция</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? `${classes.link} active` : classes.link}>О нас</NavLink>
                        </div>
                        <div className={classes.authBtns}>
                            <div className={classes.buttonSignIn} onClick={handleLoginClick}>
                                Войти
                            </div>
                            <div className={classes.buttonSignUp} onClick={handleRegisterClick}>
                                Регистрация <img src={vector} alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <LoginModal
                open={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
            <RegisterModal
                open={isRegisterModalOpen}
                onClose={() => setIsRegisterModalOpen(false)}
            />
        </>
    );
};
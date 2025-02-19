import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import image1 from '../assets/images/BuyTokens/1.png';
import image2 from '../assets/images/BuyTokens/2.png';
import image3 from '../assets/images/BuyTokens/3.png';
import image4 from '../assets/images/BuyTokens/4.png';

const useStyles = makeStyles({
    title: {
        fontSize: '72px',
        fontWeight: '700',
        marginBottom: '35px',
        '@media (max-width: 960px)': {
            fontSize: '42px',
            lineHeight: '48px',
        },
        fontFamily: 'Oswald',
    },
    container: {
        marginBottom: '80px',
    },
    description: {
        fontSize: '18px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '10px',
        '@media (max-width: 960px)': {
            flexDirection: 'column',
        },
    },
    descriptiondiv: {
        borderRadius: '25px',
        padding: '24px',
        flex: 1,
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 10%, #FFFFFF 100%)',
        border: '1px solid rgb(26 116 253 / 10%)',
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
    },
});

export const BuyTokens: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.title}>Купить токены</div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image1} alt="Registration" /></div>
                        <span>Регистрация и верификация на сайте Bynex</span>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image2} alt="Payment" /></div>
                        <span>Пополнение счета в российских рублях</span>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image3} alt="Support" /></div>
                        <span>Отправка поручения через отдел VIP поддержки Bynex</span>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image4} alt="Success" /></div>
                        <span>Токены у вас в портфеле!</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import image1 from '../../static/BuyTokens/1.png';
import image2 from '../../static/BuyTokens/2.png';
import image3 from '../../static/BuyTokens/3.png';
import image4 from '../../static/BuyTokens/4.png';

const useStyles = makeStyles(() => ({
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
        //borderImageSource: 'linear-gradient(180deg, #FFFFFF 10%, rgba(26, 116, 253, 0.1) 100%)',
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
    },
}));

export const BuyTokens = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.title}>Купить токены</div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image1} /></div>
                        <span>Регистрация и верификация на сайте Bynex</span>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image2} /></div>
                        <span>Пополнение счета в российских рублях</span>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image3} /></div>
                        <span>Отправка поручения через отдел VIP поддержки Bynex</span>

                    </div>
                    <div className={classes.descriptiondiv}>
                        <div><img src={image4} /></div>
                        <span>Токены у вас в портфеле!</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};
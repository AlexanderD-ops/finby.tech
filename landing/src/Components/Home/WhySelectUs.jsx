import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

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
    container1: {
        display: 'flex',
        gap: '18px',
        '@media (max-width: 960px)': {
            flexDirection: 'column',
        },
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    container3: {
        display: 'flex',
        gap: '18px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        '@media (max-width: 960px)': {
            width: '100%',
        },
    },
    container: {
        marginBottom: '180px',
    },
    descriptiondivTitle: {
        fontSize: '31px',
        fontWeight: '700',
        lineHeight: '34px',
        marginBottom: '14px',
    },
    description: {
        fontSize: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '35px',
        fontFamily: 'Open sans',
    },
    descriptiondiv: {
        borderRadius: '25px',
        padding: '24px',
        flex: 1,
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 10%, #FFFFFF 100%)',
        border: '1px solid rgb(26 116 253 / 10%)',
        //borderImageSource: 'linear-gradient(180deg, #FFFFFF 10%, rgba(26, 116, 253, 0.1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    list: {
        margin: 0,
        '& li': {
            marginBottom: '10px',
        },
        '@media (max-width: 960px)': {
            paddingLeft: '24px',
        },
    },
});

export const WhySelectUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.title}>Почему выбирают нас?</div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Надежность и безопасность</span>
                        <ul className={classes.list}>
                            <li>Мы - резидент Парка высоких технологий</li>
                            <li>Полное соответствие законодательству РБ</li>
                            <li>Партнерство с крупнейшим брокером РФ АО “Финам”. Обеспечение ценными бумагами РФ, 
                                а также управление портфелями ценных бумаг осуществляется 
                                на базе инфраструктуры международной группы компаний Финам. по ценным бумагам США ... 
                                осуществляется международной группой компаний Lime Trading</li>
                            <li>Партнерство с МТБанк - самым инновационным и крупным по клиентской базе частным коммерческом банке Беларуси</li>
                            <li>Токены обеспечены акциями американских, европейских, китайских и российских компаний</li>
                        </ul>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Инвестировать с нами выгодно и эффективно!</span>
                        <ul className={classes.list}>
                            <li>Мы - резидент Парка высоких технологий</li>
                            <li>Полное соответствие законодательству РБ</li>
                        </ul>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Экспертная аналитика без усилий с вашей стороны</span>
                        <ul className={classes.list}>
                            <li>Инвестиционныые стратегии находятся под управлением лучших портфельных управляющих от Лайм и Финам</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

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
        fontFamily: 'Open sans',
    },
    descriptiondiv: {
        borderRadius: '25px',
        padding: '24px',
        flex: 1,
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 10%, #FFFFFF 100%)',
        border: '1px solid rgb(26 116 253 / 10%)',
        //borderImageSource: 'linear-gradient(180deg, #FFFFFF 10%, rgba(26, 116, 253, 0.1) 100%)',
    },
}));

export const WhatIsTokens = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.title}>Что такое токены ?</div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <b>Токены</b> — это цифровые активы, стоимость которых привязана к реальными компаниям.
                        Каждый токен обеспечен акциями, которые хранятся в лицензированном депозитарии.
                    </div>
                    <div className={classes.descriptiondiv}>
                        <b>Токен-стратегии</b> - тут текст, суть которого в том, что это стратегии,
                        созданные портфельными менеджерами Финама.
                    </div>
                </div>
            </Container>
        </div>
    );
};
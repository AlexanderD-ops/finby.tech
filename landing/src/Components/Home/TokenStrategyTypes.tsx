import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import image1 from '../../static/TokenStrategyTypes/Frame 41.png';
import image2 from '../../static/TokenStrategyTypes/Frame 38.png';
import image3 from '../../static/TokenStrategyTypes/Frame 39.png';
import image4 from '../../static/TokenStrategyTypes/Frame 33.png';
import image5 from '../../static/TokenStrategyTypes/Group 28.png';

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
        marginBottom: '80px',
    },
});

export const TokenStrategyTypes = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.title}>Виды токен-стратегий</div>
                <div className={classes.container1}>
                    <div><img className={classes.image} src={image1}/></div>
                    <div className={classes.container2}>
                        <div className={classes.container3}>
                            <div><img className={classes.image} src={image2}/></div>
                            <div><img className={classes.image} src={image3}/></div>
                        </div>
                        <div><img className={classes.image} src={image4}/></div>
                        <div><img src={image5}/></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

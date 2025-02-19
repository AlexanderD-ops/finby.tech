import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import image1 from '../../static/TokenStrategyBenefits/1.png';
import image2 from '../../static/TokenStrategyBenefits/2.png';
import image3 from '../../static/TokenStrategyBenefits/3.png';
import image4 from '../../static/TokenStrategyBenefits/4.png';
import image5 from '../../static/TokenStrategyBenefits/5.png';
import image6 from '../../static/TokenStrategyBenefits/6.png';

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
        marginTop: '80px',
        marginBottom: '80px',
    },
    description: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginBottom: '25px',
        '@media (max-width: 960px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
        },
        '@media (max-width: 480px)': {
            gap: '10px',
        },
    },
    descriptiondiv: {
        borderRadius: '25px',
        padding: '24px',
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 10%, #FFFFFF 100%)',
        border: '1px solid rgb(26 116 253 / 10%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'space-between',
        minHeight: '160px',
        '@media (max-width: 960px)': {
            padding: '20px',
            gap: '8px',
        },
    },
    descriptiondivTitle: {
        fontSize: '31px',
        fontWeight: '700',
        lineHeight: '34px',
        marginBottom: '6px',
        fontFamily: 'Oswald',
        '@media (max-width: 960px)': {
            fontSize: '22px',
            lineHeight: '24px',
            marginBottom: '8px',
        },
    },
}));

export const TokenStrategyBenefits = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <div className={classes.title}>Преимущества токен стратегий</div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Подоходный налог по ставке</span>
                        <div>
                            <img src={image1} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Автоматическая ребалансировка</span>
                        <div>
                            <img src={image2} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Низкие комиссии</span>
                        <div>
                            <img src={image3} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Реинвестирование дивидендов</span>
                        <div>
                            <img src={image4} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Низкий порог входа</span>
                        <div>
                            <img src={image5} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Диверсификация</span>
                        <div>
                            <img src={image6} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
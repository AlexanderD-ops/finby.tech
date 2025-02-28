import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import image1 from '../../static/TokenStrategyBenefits/1.png';
import image2 from '../../static/TokenStrategyBenefits/2.png';
import image3 from '../../static/TokenStrategyBenefits/3.png';
import image4 from '../../static/TokenStrategyBenefits/4.png';
import image5 from '../../static/TokenStrategyBenefits/5.png';

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
        marginBottom: '25px',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    descriptiondivTitle: {
        fontSize: '31px',
        fontWeight: '700',
        lineHeight: '34px',
        marginBottom: '24px',
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
                </div>
                <div className={classes.description}>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Реинвестирование
                            дивидендов</span>

                        <div>
                            <img src={image4} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>
                        <span className={classes.descriptiondivTitle}>Низкий
                            порог входа</span>

                        <div>
                            <img src={image5} />
                        </div>
                    </div>
                    <div className={classes.descriptiondiv}>

                        <span className={classes.descriptiondivTitle}>Диверсификация</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, IconButton } from '@mui/material';
import strategy1 from '../assets/images/TokenStrategyTypes/strategy1.jpg';
import strategy2 from '../assets/images/TokenStrategyTypes/strategy2.jpg';
import strategy3 from '../assets/images/TokenStrategyTypes/strategy3.jpg';

const useStyles = makeStyles({
    title: {
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '35px',
        fontFamily: 'Oswald',
        '@media (max-width: 960px)': {
            fontSize: '32px',
            lineHeight: '48px',
        },
    },
    sliderContainer: {
        position: 'relative',
        marginLeft: 'calc((100vw - 1200px) / 2)',
        paddingBottom: '40px',
    },
    cardsContainer: { 
        display: 'flex',
        transition: 'transform 0.3s ease',
        gap: '18px',
    },
    navigationButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '50%',
        left: 'calc((100vw - 1200px) / 2)',
        right: '40px',
        transform: 'translateY(-50%)',
        zIndex: 2,
    },
    navButton: {
        background: 'rgba(64, 64, 64, 0.8) !important',
        margin: '0 10px !important',
        pointerEvents: 'auto',
        '&:hover': {
            background: 'rgba(64, 64, 64, 0.9) !important',
        },
    },
    hiddenButton: {
        visibility: 'hidden',
    },
    card: {
        position: 'relative',
        borderRadius: '25px',
        overflow: 'hidden',
        width: '428px',
        height: '541px',
        cursor: 'pointer',
        flex: 'none',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: '10px 10px 40px -10px #64A2FF',
        },
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '10px',
        fontFamily: 'Oswald',
    },
    cardInfo: {
        fontSize: '16px',
        marginBottom: '7px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontFamily: 'Oswald',
    },
    cardTop: {
        marginTop: '10px',
    },
    cardBottom: {
        width: '100%',
    },
    detailsButton: {
        background: '#FFFFFF',
        color: '#1970B5',
        height: '52px',
        width: '100%',
        borderRadius: '15px',
        fontSize: '16px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid #1970B5',
    },
    wrapper: {
        marginBottom: '80px',
    },
    sliderWrapper: {
        position: 'relative',
        overflow: 'hidden',
    },
});

export const TokenStrategyTypes = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);

    const strategies = [
        {
            title: 'Восстановление российского рынка',
            info: [
                'Ожидаемая доходность: 20%-50%/год',
                'Актуальность идеи: 1-3 лет'
            ],
            image: strategy1
        },
        {
            title: 'Затаившийся дракон. Китай подготовился к новому скоку Трампа',
            info: [],
            image: strategy2
        },
        {
            title: 'Топ-15 акций в кризис',
            info: [],
            image: strategy3
        },
        {
            title: 'Восстановление российского рынка',
            info: [
                'Ожидаемая доходность: 20%-50%/год',
                'Актуальность идеи: 1-3 лет'
            ],
            image: strategy1
        },
        {
            title: 'Затаившийся дракон. Китай подготовился к новому скоку Трампа',
            info: [],
            image: strategy2
        },
    ];

    const handlePrevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    const handleNextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, strategies.length - 3));
    };

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.title}>Виды токен-стратегий</div>
            </Container>
            <div className={classes.sliderWrapper}>
                <div className={classes.sliderContainer}>
                    <div 
                        className={classes.cardsContainer}
                        style={{ 
                            transform: `translateX(${currentSlide * -(428 + 18)}px)`
                        }}
                    >
                        {strategies.map((strategy, index) => (
                            <div key={index} className={classes.card}>
                                <img 
                                    src={strategy.image} 
                                    alt={strategy.title} 
                                    className={classes.cardImage}
                                />
                                <div className={classes.cardContent}>
                                    <div className={classes.cardTop}>
                                        <div className={classes.cardTitle}>
                                            {strategy.title}
                                        </div>
                                        {strategy.info.map((info, i) => (
                                            <div key={i} className={classes.cardInfo}>
                                                {info}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={classes.cardBottom}>
                                        <div className={classes.detailsButton}>
                                            Подробнее
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.navigationButtons}>
                    <IconButton 
                        className={`${classes.navButton} ${currentSlide === 0 ? classes.hiddenButton : ''}`}
                        onClick={handlePrevSlide}
                        disabled={currentSlide === 0}
                    >
                        ←
                    </IconButton>
                    <IconButton 
                        className={classes.navButton}
                        onClick={handleNextSlide}
                        disabled={currentSlide === strategies.length - 3}
                    >
                        →
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

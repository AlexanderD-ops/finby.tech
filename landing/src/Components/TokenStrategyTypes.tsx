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
        display: 'flex',
        alignItems: 'flex-start',
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
        left: '40px',
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
    detailsContainer: {
        width: '428px',
        opacity: 0,
        transform: 'translateX(-20px)',
        transition: 'all 0.3s ease',
        visibility: 'hidden',
        flex: 'none',
        height: '541px',
    },
    detailsContainerActive: {
        opacity: 1,
        transform: 'translateX(0)',
        visibility: 'visible',
    },
    detailsContent: {
        padding: '30px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    detailsTitle: {
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: '20px',
        fontFamily: 'Oswald',
        color: '#1970B5',
    },
    detailsDescription: {
        fontSize: '16px',
        lineHeight: '24px',
        color: '#333333',
        flex: 1,
        overflow: 'auto',
        marginBottom: '20px',
    },
    detailsInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    detailsInfoItem: {
        fontSize: '16px',
        color: '#666666',
        fontFamily: 'Oswald',
        lineHeight: '1.2',
    },
});

export const TokenStrategyTypes = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const strategies = [
        {
            title: 'Восстановление российского рынка',
            info: [
                'Ожидаемая доходность: 20%-50%/год',
                'Актуальность идеи: 1-3 лет'
            ],
            image: strategy1,
            description: 'Что общего у всех кризисов? Объединяет все кризисы одно - последующая фаза восстановления рынка. Трендовое восстановление после кризиса - это, как минимум, возврат к долгосрочным средним значениям и как максимум - компенсация временного лага, в течение которого рынок упускает фазу роста.',
            tokenStrategy: 'NFR TOKEN'
        },
        {
            title: 'Затаившийся дракон. Китай подготовился к новому скоку Трампа',
            info: [
                'Ожидаемая доходность: 15%-40%/год',
                'Актуальность идеи: 2-4 года'
            ],
            image: strategy2,
            description: 'Китайский рынок демонстрирует признаки восстановления после длительного периода спада. Экономические показатели улучшаются, а государственная поддержка создает благоприятные условия для роста.',
            tokenStrategy: 'CHINA GROWTH TOKEN'
        },
        {
            title: 'Топ-15 акций в кризис',
            info: [
                'Ожидаемая доходность: 25%-60%/год',
                'Актуальность идеи: 1-2 года'
            ],
            image: strategy3,
            description: 'Кризис - это не только риски, но и возможности. Мы отобрали 15 компаний, которые имеют сильные фундаментальные показатели и способны не только пережить кризис, но и укрепить свои позиции.',
            tokenStrategy: 'CRISIS OPPORTUNITY TOKEN'
        },
        {
            title: 'Восстановление российского рынка',
            info: [
                'Ожидаемая доходность: 20%-50%/год',
                'Актуальность идеи: 1-3 лет'
            ],
            image: strategy1,
            description: 'Что общего у всех кризисов? Объединяет все кризисы одно - последующая фаза восстановления рынка. Трендовое восстановление после кризиса - это, как минимум, возврат к долгосрочным средним значениям и как максимум - компенсация временного лага, в течение которого рынок упускает фазу роста.',
            tokenStrategy: 'NFR TOKEN'
        },
        {
            title: 'Затаившийся дракон. Китай подготовился к новому скоку Трампа',
            info: [
                'Ожидаемая доходность: 15%-40%/год',
                'Актуальность идеи: 2-4 года'
            ],
            image: strategy2,
            description: 'Китайский рынок демонстрирует признаки восстановления после длительного периода спада. Экономические показатели улучшаются, а государственная поддержка создает благоприятные условия для роста.',
            tokenStrategy: 'CHINA GROWTH TOKEN'
        }
    ];

    const handlePrevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
        setSelectedCard(null);
    };

    const handleNextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, strategies.length - 3));
        setSelectedCard(null);
    };

    const handleCardClick = (index: number) => {
        setSelectedCard(selectedCard === index ? null : index);
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
                            <React.Fragment key={index}>
                                <div 
                                    className={classes.card}
                                    onClick={() => handleCardClick(index)}
                                >
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
                                            <div 
                                                className={classes.detailsButton}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCardClick(index);
                                                }}
                                            >
                                                Подробнее
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {selectedCard === index && (
                                    <div className={`${classes.detailsContainer} ${classes.detailsContainerActive}`}>
                                        <div className={classes.detailsContent}>
                                            <div className={classes.detailsTitle}>
                                                {strategy.title}
                                            </div>
                                            <div className={classes.detailsDescription}>
                                                {strategy.description}
                                            </div>
                                            <div className={classes.detailsInfo}>
                                                {strategy.info.map((info, i) => (
                                                    <div key={i} className={classes.detailsInfoItem}>
                                                        {info}
                                                    </div>
                                                ))}
                                                <div className={classes.detailsInfoItem}>
                                                    Токен-стратегия: {strategy.tokenStrategy}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
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

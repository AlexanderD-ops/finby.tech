import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import TokensCss from './Tokens.css';

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
    tokenItem: {
        marginRight: '30px',
        padding: '30px 10px 30px 35px',
        margin: '0 30px',
        width: '400px',
        boxShadow: '4px 5px 6px 0px #0000000D',
        border: '1px solid transparent',
        borderRadius: '30px',
        backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, rgba(26, 116, 253, 0.1) 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
    },
    checkButton: {
        marginTop: '8px',
    },
    background: {
        background: '#F7FAFF',
    },
    tokenName: {
        fontSize: '32px',
        marginBottom: '10px'
    },
    tokenInfo: {
        display: 'flex',
        marginBottom: '10px',
        gap: '5px',
    },
    tokenInfoItem1: {
        flex: '1 1 0',
    },
    tokenInfoItem2: {
        flex: '1',
    }
});

export const Tokens = () => {
    const classes = useStyles();

    const [items, setItems] = useState({ products: [] });

    useEffect(() => {
        axios.get('https://finby.by/api/v1/watch/read?user_key=d8b53b40-9abe-422e-80f6-db148aafe25b')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div className={classes.background}>
            <Container>
                <div className={classes.title}>Токены</div>
                <Slider {...settings} className={classes.slider}>
                    {items.products.map((item, i) => (
                        <div key={i} className={classes.slickSlide}>
                            <div className={classes.tokenItem} style={{ background: '#fff' }}>
                                <div className={classes.tokenName}>
                                    <b>{item.symbol}</b>
                                </div>
                                <div className={classes.tokenInfo}>
                                    <div className={classes.tokenInfoItem1}>Текущая стоимость</div>
                                    <div className={classes.tokenInfoItem2}>{item.watchPriceBid.toLocaleString('en-US', {
                                        minimumFractionDigits: 0, maximumFractionDigits: 2, currency: 'USD', style: 'currency',
                                    })} / {item.watchPriceAsk.toLocaleString('en-US', {
                                        minimumFractionDigits: 0, maximumFractionDigits: 2, currency: 'USD', style: 'currency',
                                    })}</div>
                                </div>
                                <div className={classes.tokenInfo}>
                                    <div className={classes.tokenInfoItem1}>Дата экспирации</div>
                                    <div className={classes.tokenInfoItem2}>{new Date(item.watchDate).toLocaleDateString()}</div>
                                </div>
                                <div className={classes.tokenInfo}>
                                    <div className={classes.tokenInfoItem1}>Уровень риска</div>
                                    <div className={classes.tokenInfoItem2}>{item.risk}</div>
                                </div>
                                <div className={classes.tokenInfo}>
                                    <div className={classes.tokenInfoItem1}>Текущая доходность %</div>
                                    <div className={classes.tokenInfoItem2}>{item.profitPerc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default Tokens;
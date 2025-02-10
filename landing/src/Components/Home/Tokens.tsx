import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Button } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArrowUp from '../../static/arrowup.png';
import ArrowDown from '../../static/arrowdown.png';

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
    sliderItem: {
        width: '520px !important',
        '@media (max-width: 768px)': {
            width: 'auto',
            margin: '0',
        },
    },
    tokenItem: {
        padding: '30px 10px 30px 35px',
        width: '490px',
        '@media (max-width: 768px)': {
            width: 'auto',
            margin: '0',
        },
        boxShadow: '4px 5px 6px 0px #0000000D',
        borderLeft: '1px solid rgb(26 116 253 / 10%)',
        borderRight: '1px solid rgb(26 116 253 / 10%)',
        borderRadius: '30px',
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
        alignItems: 'center',
        marginBottom: '20px',
        gap: '5px',
        fontSize: '16px',
    },
    tokenInfoItem1: {
        flex: '40%',
        marginRight: '0',
        fontWeight: '500',
    },
    tokenInfoItem2: {
        flex: '60%',
        fontWeight: '700',
    },
    tokenValue: {
        fontSize: '24px',
        fontWeight: '700',
        flex: '60%',
        '@media (max-width: 768px)': {
            fontSize: '20px',
        },
    },
    tokenProfit: {
        display: 'flex',
        flex: '60%',
    },
    slider: {
        paddingBottom: '40px',
    },
    negative: {
        color: '#FF1E1E',
    },
    positive: {
        color: '#0FCB6D',
    },
    strClass: {
        marginRight: '5px',
        fontSize: '12px',
    },
    btnContainer: {
        marginTop: '30px',
    },
});

const CustomButton = styled(Button)({
        padding: '10px 10px !important',
        borderColor: '#000 !important',
        color: '#000 !important',
        borderRadius: '15px !important',
        border: '1px solid #000 !important',
        fontSize: '12px !important',
        fontWeight: '700 !important',
        fontFamily: 'Montserrat !important',
  });
  

// const CustomButton = ({ children }) => {
//     const classes = useStyles();
//     return (<Button className={classes.customButton} variant="outlined">{children}</Button>);
// };

const NumberWithArrow = ({ number, str }: { number: number; str: string }) => {
    const classes = useStyles();
    const isNegative = number < 0;
    const arrowImg = isNegative ? ArrowDown : ArrowUp;
    const numberClass = isNegative ? classes.negative : classes.positive;

    return (
        <span>
            <img src={arrowImg} alt={isNegative ? 'Arrow Down' : 'Arrow Up'} />
            <span className={numberClass}>{number.toFixed(2)} </span><span className={classes.strClass}>{str}</span>
        </span>
    );
};

interface TokenItem {
    symbol: string;
    watchPriceBid: number;
    watchPriceAsk: number;
    watchDate: string;
    risk: string;
    profitPerc1Day: number;
    profitPerc1Week: number;
    profitPerc1Month: number;
}

export const Tokens = () => {
    const classes = useStyles();

    const [items, setItems] = useState<{ products: TokenItem[] }>({ products: [] });

    useEffect(() => {
        axios.get('https://finby.by/api/v1/watch/read?user_key=d8b53b40-9abe-422e-80f6-db148aafe25b')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className={classes.background}>
            <Container>
                <div className={classes.title}>Токены</div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    pagination={{
                        clickable: true
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Pagination, Mousewheel, Keyboard]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.3
                        },
                    }}
                    className={classes.slider}>
                    {items.products.map((item, i) => (
                        <SwiperSlide key={i} className={classes.sliderItem}>
                            <div className={classes.tokenItem} style={{ background: '#fff' }}>
                                <div>
                                    <div className={classes.tokenName}>
                                        <b>{(item as any).symbol}</b>
                                    </div>
                                    <div className={classes.tokenInfo}>
                                        <div className={classes.tokenInfoItem1}>Текущая стоимость</div>
                                        <div className={classes.tokenValue}>{(item as any).watchPriceBid.toLocaleString('ru-RU', {
                                            minimumFractionDigits: 0, maximumFractionDigits: 2, currency: 'RUB', style: 'currency',
                                        })} / {(item as any).watchPriceAsk.toLocaleString('ru-RU', {
                                            minimumFractionDigits: 0, maximumFractionDigits: 2, currency: 'RUB', style: 'currency',
                                        })}</div>
                                    </div>
                                    <div className={classes.tokenInfo}>
                                        <div className={classes.tokenInfoItem1}>Дата экспирации</div>
                                        <div className={classes.tokenInfoItem2}>{new Date(item.watchDate).toLocaleDateString('ru-RU', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}</div>
                                    </div>
                                    <div className={classes.tokenInfo}>
                                        <div className={classes.tokenInfoItem1}>Уровень риска</div>
                                        <div className={classes.tokenInfoItem2}>{item.risk}</div>
                                    </div>
                                    <div className={classes.tokenInfo}>
                                        <div className={classes.tokenInfoItem1}>Текущая доходность %</div>
                                        <div className={classes.tokenProfit}>
                                            <NumberWithArrow number={item.profitPerc1Day} str={'День'} />
                                            <NumberWithArrow number={item.profitPerc1Week} str={'Неделя'} />
                                            <NumberWithArrow number={item.profitPerc1Month} str={'Месяц'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btnContainer}>
                                <CustomButton variant="outlined" style={{marginRight: '10px'}}>О стратегии</CustomButton>
                                <CustomButton variant="outlined">Купить {item.symbol}</CustomButton>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default Tokens;
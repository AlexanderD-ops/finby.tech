import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import officeImage from '../../static/AboutUs/office.png';
import finamLogo from '../../static/AboutUs/finam.png';
import mtbankLogo from '../../static/AboutUs/mtbank.png';
import softClubLogo from '../../static/AboutUs/softclub.png';
import bntechLogo from '../../static/AboutUs/bntech.png';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '80px',
        marginBottom: '80px',
    },
    title: {
        fontSize: '72px',
        fontWeight: '700',
        marginBottom: '35px',
        fontFamily: 'Oswald',
        '@media (max-width: 960px)': {
            fontSize: '42px',
            lineHeight: '48px',
        },
    },
    introSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginBottom: '80px',
        '@media (max-width: 960px)': {
            gridTemplateColumns: '1fr',
        },
    },
    introText: {
        '& p': {
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '20px',
        },
    },
    introImage: {
        '& img': {
            width: '100%',
            borderRadius: '25px',
        },
    },
    partnersSection: {
        marginBottom: '80px',
    },
    sectionTitle: {
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '40px',
        fontFamily: 'Oswald',
        color: '#1A2024',
    },
    partnerCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px',
    },
    partnerLogo: {
        width: '120px',
        flexShrink: 0,
    },
    partnerDescription: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#4A4A4A',
    },
    offerSection: {
        marginBottom: '80px',
    },
    offerItem: {
        marginBottom: '30px',
        '& h3': {
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '10px',
            fontFamily: 'Oswald',
        },
        '& p': {
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4A4A4A',
        },
    },
    techExpertise: {
        textAlign: 'center',
        marginBottom: '80px',
        '& p': {
            fontSize: '16px',
            lineHeight: '1.5',
            maxWidth: '800px',
            margin: '0 auto 40px',
        },
    },
    advantages: {
        background: '#F8F9FA',
        padding: '40px',
        borderRadius: '25px',
        '& ul': {
            listStyle: 'none',
            padding: 0,
            '& li': {
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '15px',
                paddingLeft: '20px',
                position: 'relative',
                '&:before': {
                    content: '"•"',
                    position: 'absolute',
                    left: 0,
                    color: '#1970B5',
                },
            },
        },
    },
}));

export const AboutUs: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.introSection}>
                <div className={classes.introText}>
                    <h1 className={classes.title}>Кто мы?</h1>
                    <p>ФИНАМ ТОКЕНЫ – это инновационная инвестиционная платформа, созданная в 2024 году путем стратегического партнерства между ведущим инвестиционным холдингом ФИНАМ и МТБанком.</p>
                    <p>Наша миссия – сделать современные инвестиционные возможности доступными для каждого через технологию токенизации активов.</p>
                </div>
                <div className={classes.introImage}>
                    <img src={officeImage} alt="Office" />
                </div>
            </div>

            <div className={classes.partnersSection}>
                <h2 className={classes.sectionTitle}>Наши ключевые партнеры</h2>
                <div className={classes.partnerCard}>
                    <img src={finamLogo} alt="Finam" className={classes.partnerLogo} />
                    <p className={classes.partnerDescription}>
                        Ведущий инвестиционный холдинг СНГ с 30-летней историей успеха, обслуживающий более 500 000 клиентов. Основан в 1994 году и является гарантом надежности и профессионализма в сфере инвестиций.
                    </p>
                </div>
                <div className={classes.partnerCard}>
                    <img src={mtbankLogo} alt="MTBank" className={classes.partnerLogo} />
                    <p className={classes.partnerDescription}>
                        Один из крупнейших банков Беларуси с иностранным капиталом, предоставляющий инновационные финансовые решения с 1994 года. Входит в топ-10 банков страны и специализируется на современных финансовых технологиях.
                    </p>
                </div>
            </div>

            <div className={classes.offerSection}>
                <h2 className={classes.sectionTitle}>Что мы предлагаем</h2>
                <div className={classes.offerItem}>
                    <h3>Токенизация активов</h3>
                    <p>преобразование прав на реальные активы в цифровые токены, делая инвестиции более доступными и прозрачными</p>
                </div>
                <div className={classes.offerItem}>
                    <h3>Инвестиционные токены</h3>
                    <p>цифровые ценные бумаги нового поколения, обеспеченные реальными активами</p>
                </div>
                <div className={classes.offerItem}>
                    <h3>Токенизированные стратегии</h3>
                    <p>доступ к профессиональному управлению активами через покупку токенов инвестиционных стратегий</p>
                </div>
            </div>

            <div className={classes.techExpertise}>
                <h2 className={classes.sectionTitle}>Технологическая экспертиза</h2>
                <p>Наши технологические решения разработаны при поддержке ведущих компаний-резидентов Парка высоких технологий Республики Беларусь:</p>
                <div className={classes.partnerCard}>
                    <img src={softClubLogo} alt="SoftClub" className={classes.partnerLogo} />
                    <p className={classes.partnerDescription}>
                        Группа компаний с 30-летним опытом создания технологических решений для финансового сектора Восточной Европы и СНГ.
                    </p>
                </div>
                <div className={classes.partnerCard}>
                    <img src={bntechLogo} alt="BNTech" className={classes.partnerLogo} />
                    <p className={classes.partnerDescription}>
                        Международная технологическая компания, специализирующаяся на инновационных решениях для инвестиционно-финансового сектора.
                    </p>
                </div>
            </div>

            <div className={classes.advantages}>
                <h2 className={classes.sectionTitle}>Наши преимущества</h2>
                <ul>
                    <li>Надежность, подкрепленная репутацией ведущих финансовых институтов</li>
                    <li>Инновационные технологии и высокий уровень безопасности</li>
                    <li>Прозрачность всех операций благодаря blockchain технологии</li>
                    <li>Низкий порог входа и возможность дробного владения активами</li>
                    <li>Профессиональное управление и экспертиза в сфере инвестиций</li>
                </ul>
            </div>
        </Container>
    );
}; 
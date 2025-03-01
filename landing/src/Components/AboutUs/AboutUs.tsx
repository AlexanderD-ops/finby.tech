import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import officeImage from '../../assets/images/AboutUs/office.png';
import finamLogo from '../../assets/images/AboutUs/finam.png';
import mtbankLogo from '../../assets/images/AboutUs/mtbank.png';
import softClubLogo from '../../assets/images/AboutUs/softclub.png';
import bntechLogo from '../../assets/images/AboutUs/bntech.png';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '80px',
        marginBottom: '80px',
        maxWidth: '1050px !important',
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
    introBlock: {
        position: 'relative',
        minWidth: '480px',
        maxWidth: '100%',
        width: 'auto',
        height: '200px',
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 0%, #FFFFFF 100%)',
        boxShadow: '4px 5px 6px rgba(0, 0, 0, 0.05)',
        borderRadius: '25px',
        padding: '32px',
        marginBottom: '40px',
        overflow: 'hidden',
        '& p': {
            fontSize: '18px',
            lineHeight: '1.5',
            margin: 0,
            color: '#000',
            '&:first-of-type': {
                marginBottom: '20px',
            }
        },
        '& strong': {
            fontWeight: 'bold'
        }
    },
    introImage: {
        display: 'flex',
        alignItems: 'flex-end',
        height: '100%',
        '& img': {
            width: '100%',
            borderRadius: '25px',
            display: 'block',
            marginLeft: 'auto',
            marginBottom: '40px'
        },
    },
    partnersSection: {
        marginBottom: '80px',
        background: '#F7FAFF',
        padding: '40px',
        borderRadius: '0',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
        '& > h2': {
            maxWidth: '1050px',
            margin: '0 auto 40px',
        },
        '& > div': {
            maxWidth: '1050px',
            margin: '0 auto',
        }
    },
    sectionTitle: {
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '40px',
        fontFamily: 'Oswald',
        color: '#0D2C4A',
        textAlign: 'center',
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
        '& > h2': {
            color: '#000000',
            textAlign: 'left',
            maxWidth: '1050px',
            margin: '0 auto 40px',
        }
    },
    offerItem: {
        marginBottom: '30px',
        margin: '0 auto',
        position: 'relative',
        minWidth: '480px',
        maxWidth: '100%',
        width: 'auto',
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 0%, #FFFFFF 100%)',
        boxShadow: '4px 5px 6px rgba(0, 0, 0, 0.05)',
        borderRadius: '25px',
        padding: '32px',
        overflow: 'hidden',
        '& p': {
            fontSize: '28px',
            lineHeight: '1.5',
            color: '#000000',
            fontFamily: 'Oswald',
            margin: 0,
            '& strong': {
                fontWeight: '700',
            }
        },
    },
    techExpertise: {
        textAlign: 'center',
        marginBottom: '80px',
        background: '#F7FAFF',
        padding: '40px',
        borderRadius: '0',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
        '& > h2': {
            maxWidth: '1050px',
            margin: '0 auto 40px',
        },
        '& > p': {
            fontSize: '18px',
            lineHeight: '1.5',
            maxWidth: '800px',
            margin: '0 auto 40px',
            '& strong': {
                fontWeight: 'bold'
            }
        },
        '& > div': {
            maxWidth: '1050px',
            margin: '0 auto',
        }
    },
    advantages: {
        background: 'radial-gradient(66.71% 66.71% at 50% 50%, #EDF4FF 0%, #FFFFFF 100%)',
        boxShadow: '4px 5px 6px rgba(0, 0, 0, 0.05)',
        padding: '32px',
        borderRadius: '25px',
        '& > h2': {
            fontFamily: 'Open Sans',
            fontWeight: 800,
            fontSize: '31px',
            lineHeight: '34px',
            letterSpacing: '0.2px',
            marginBottom: '40px',
            color: '#000000',
            textAlign: 'left',
        },
        '& ul': {
            listStyle: 'none',
            padding: 0,
            '& li': {
                fontFamily: 'Oswald',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '34px',
                letterSpacing: '0.2px',
                marginBottom: '15px',
                paddingLeft: '20px',
                position: 'relative',
                '&:before': {
                    content: '"•"',
                    position: 'absolute',
                    left: 0,
                    color: '#000000',
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
                    <div className={classes.introBlock}>
                        <p><strong>ФИНАМ ТОКЕНЫ – это инновационная инвестиционная платформа, созданная в 2024 году путем стратегического партнерства между ведущим инвестиционным холдингом ФИНАМ и МТБанком.</strong></p>
                        <p>Наша миссия – сделать современные инвестиционные возможности доступными для каждого через технологию токенизации активов.</p>
                    </div>
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
                    <p><strong>Токенизация активов</strong> - преобразование прав на реальные активы в цифровые токены, делая инвестиции более доступными и прозрачными</p>
                </div>
                <div className={classes.offerItem}>
                    <p><strong>Инвестиционные токены</strong> - цифровые ценные бумаги нового поколения, обеспеченные реальными активами</p>
                </div>
                <div className={classes.offerItem}>
                    <p><strong>Токенизированные стратегии</strong> - доступ к профессиональному управлению активами через покупку токенов инвестиционных стратегий</p>
                </div>
            </div>

            <div className={classes.techExpertise}>
                <h2 className={classes.sectionTitle}>Технологическая экспертиза</h2>
                <p><strong>Наши технологические решения разработаны при поддержке ведущих компаний-резидентов Парка высоких технологий Республики Беларусь:</strong></p>
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
import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../assets/images/finamlogo.png';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
    },
    modalContent: {
        background: '#FFFFFF',
        borderRadius: '25px',
        padding: '40px 40px 20px',
        width: '100%',
        maxWidth: '432px',
        position: 'relative',
        outline: 'none',
        zIndex: 1301,
    },
    logo: {
        width: '200px',
        height: 'auto',
        display: 'block',
        margin: '0 auto 40px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '20px',
    },
    inputLabel: {
        color: '#8F8F8F',
        fontSize: '16px',
        marginBottom: '8px',
        fontWeight: 400,
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '0',
            height: '48px',
            '& fieldset': {
                border: 'none',
                borderBottom: '1px solid #E0E0E0',
            },
            '&:hover fieldset': {
                border: 'none',
                borderBottom: '1px solid #1970B5',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
                borderBottom: '1px solid #1970B5',
            },
            '& input': {
                fontSize: '16px',
                color: '#333333',
                paddingLeft: '0',
            },
        },
    },
    loginButton: {
        background: '#FFFFFF',
        color: '#1970B5',
        borderRadius: '50px',
        padding: '12px',
        height: '48px',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'none',
        marginTop: '10px',
        border: '3px solid #1970B5',
        '&:hover': {
            background: 'rgba(25, 112, 181, 0.05)',
            borderWidth: '3px',
        },
    },
    forgotPassword: {
        color: '#8F8F8F',
        textAlign: 'left',
        textDecoration: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    register: {
        color: '#1970B5',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
        marginTop: '5px',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    checkbox: {
        color: '#8F8F8F',
        fontSize: '14px',
        '& .MuiCheckbox-root': {
            color: '#1970B5',
        },
        '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            color: '#333333',
            fontFamily: 'Oswald',
        },
    },
}));

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
    onLoginClick: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose, onLoginClick }) => {
    const classes = useStyles();
    const [isAgreed, setIsAgreed] = useState(false);

    const handleLoginClick = () => {
        onClose();
        onLoginClick();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            className={classes.modal}
        >
            <Box className={classes.modalContent}>
                <img src={logo} alt="Финам Токены" className={classes.logo} />
                <form className={classes.form}>
                    <div>
                        <Typography className={classes.inputLabel}>
                            Электронная почта
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            className={classes.textField}
                        />
                    </div>
                    <div>
                        <Typography className={classes.inputLabel}>
                            Пароль
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="password"
                            className={classes.textField}
                        />
                    </div>
                    <div>
                        <Typography className={classes.inputLabel}>
                            Повторите пароль
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="password"
                            className={classes.textField}
                        />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Подтверждаю свое согласие на обработку персональных данных и использование файлов cookie"
                        className={classes.checkbox}
                    />
                    <Button
                        fullWidth
                        variant="outlined"
                        disabled={!isAgreed}
                        sx={{ 
                            background: '#FFFFFF !important',
                            color: '#1970B5 !important',
                            height: '52px !important',
                            borderRadius: '15px !important',
                            padding: '15px 25px !important',
                            gap: '15px !important',
                            fontSize: '16px !important',
                            fontWeight: '700 !important',
                            textTransform: 'none !important',
                            marginTop: '5px',
                            border: '1px solid #1970B5 !important',
                            opacity: isAgreed ? 1 : 0.5,
                            '&:hover': {
                                background: 'rgba(25, 112, 181, 0.05) !important',
                                border: '1px solid #1970B5 !important'
                            }
                        }}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <Typography
                    className={classes.register}
                    onClick={handleLoginClick}
                >
                    Войти
                </Typography>
            </Box>
        </Modal>
    );
}; 
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './index.module.css'
import { useLogin } from '../../api/auth/useLogin';
import background from '../../assets/background.png'
import { Loader } from '../../components/Loader/Loader';
import Swal from 'sweetalert2';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin()

    if (login.isLoading) return <Loader text='Cargando...' />
    if (login.isError && login.error && login.error.response) {
        const errorlogueo = login.error.response.status || null;
        console.log(errorlogueo);
        if (errorlogueo === 401) {
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: "Usuario o contraseña son incorrectos",
            });
        }
    }

    if (login.isSuccess) {
        const accesToken = login.data?.data?.accesToken
        if (accesToken) {
            localStorage.setItem('token', accesToken)
            localStorage.setItem('user', JSON.stringify(login.data.data.user))
            navigate('/home');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Te logueaste correctamente",
                text: "Espera mientras te redireccionamos",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login.mutate({ password, username })
    };

    return (
        <div className={style.containerLogin}>
            <div className={style.formContainer}>
                <img src={background} alt='img de fondo' />
                <div className={style.content}>
                    <div className={style.flexCenter}>
                        <span className={style.firstTitle}>APLICACIÓN DE GESTIÓN</span>
                        <h3 className={style.secondTitle}>SOMA EMPRENDE</h3>
                    </div>
                    <div className={style.flexCenter}>
                        <span className={style.thirdTitle}>Ingresar</span>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <div className={style.inputContainer}>
                                {<span className={username ? style.label : style.labelCollapse}>CORREO</span>}
                                <input className={style.input} type='text' onChange={handleUsernameChange} placeholder='CORREO' />
                            </div>
                            <div className={style.inputContainer}>
                                {<span className={password ? style.label : style.labelCollapse}>CONTRASEÑA</span>}
                                <input className={style.input} type='password' onChange={handlePasswordChange} placeholder='CONTRASEÑA' />
                            </div>
                            <input className={style.submitBtn} type='submit' value='INICIAR SESIÓN' />
                        </form>
                        <span className={style.help}>¿No podés iniciar sesión? <b>Contactanos</b></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;

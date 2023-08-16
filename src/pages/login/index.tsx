import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../api/auth/useLogin';
import './Login css/login.css';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const login = useLogin()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);
    console.log('LOGIN STATUS', login.status)
    if(login.isLoading) return <>Cargando...</>

    if(login.isError){
        if(login.error.status === 401){
            alert('Usuario invalido')
        }
        alert('Error normal')
    }

    if(login.isSuccess){
        const accesToken = login.data.data.accesToken
        if(accesToken){ 
            localStorage.setItem('token', accesToken)
            navigate('/admin/panel')
        }
    }

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    // const isMobile = window.innerWidth <= 767;

    // const loadingImage = isMobile ? "loadingm.png" : "loading.png";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login.mutate({ password, username })
    };

    return (
        <div className="container">
            {isLoading ? (
                <div className="loading-container">
                    <img src="loading.png" alt="Cargando..." className="loading-image" />
                </div>
            ) : (
                <>
                    <div className="left-column">
                        <h1>SOMA EMPRENDE</h1>
                        <p>Una nueva forma de organizar tu negocio</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <h2>Iniciar sesión</h2>
                            <input
                                type="text"
                                name="username"
                                placeholder="Correo electronico"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <br />
                            <p className="forgot-password">¿Perdiste tu contraseña?</p>
                            <button type="submit">Acceder</button>
                        </form>

                        <div className="social-media">
                            <p>Síguenos en las redes sociales:</p>
                            <div className="social-icons">
                                {/* Aquí puedes agregar los logos de las redes sociales */}
                                <a href="www">
                                    <img src="facebook.png" alt="Facebook" />
                                </a>
                                <a href="www">
                                    <img src="instagram.png" alt="Instagram" />
                                </a>
                                <a href="www">
                                    <img src="twitter.png" alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <img src="login.png" alt="Imagen" className="right-column-image" />
                    </div>
                </>
            )}
        </div>
    );
};

export default LoginPage;

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Loader from "react-loader-spinner"
import { Context  } from '../../Context/AuthContext'
import { useContext } from 'react'

export default function HomePage() {
    const { setToken, userData, setUserData } = useContext(Context)
    const [disabled, setDisabled] = useState(false)
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    function handleLogin(event) {
        event.preventDefault()

        setDisabled(true)               

        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginData)

        post.then(response =>{
            setToken(response.data.token)
            setUserData({...userData, name:response.data.name, image:response.data.image})
            navigate('/hoje')            
        })
        post.catch(error => {
            alert(error.response.data.message + ' tente novamente')
            setDisabled(false)
        })
    }

    return(
        <Container>
            <img src={logo} alt="" />
            <Form>
                <input
                    value={loginData.email}
                    type="email" 
                    placeholder='email'
                    disabled={disabled}
                    onChange={(e) => setLoginData({...loginData, email:e.target.value})}
                />
                <input
                    value={loginData.password}
                    type="password" 
                    placeholder='senha' 
                    disabled={disabled}
                    onChange={(e) => setLoginData({...loginData, password:e.target.value})}
                />
                <button onClick={handleLogin} type="submit">
                    {disabled ? 
                        <Loader
                            type="ThreeDots"
                            color="#FFF"
                            height={13}
                            width={51}
                        /> : "Entrar"
                    }
                </button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding-right: 36px;
    padding-left: 36px;

    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`

const Form = styled.form`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    input {
        width: 100%;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        padding-left: 11px;

        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666
    }
    button{
        width: 100%;
        height: 45px;

        background-color: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    margin-top: 32px;
    margin-bottom: 25px;
`
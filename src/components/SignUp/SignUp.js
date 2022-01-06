import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

export default function SingUp() {
    const [disabled, setDisabled] = useState(false)
    const [userData, setUserData] = useState({
        email:'',
        name:'',
        password:'',
        image:''
    })
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        setDisabled(true)               

        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData)

        post.then(() => navigate('/'))
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
                    value={userData.email}
                    type="email" 
                    placeholder='email'
                    disabled={disabled}
                    onChange={(e) => setUserData({...userData, email:e.target.value})} 
                />
                <input
                    value={userData.password}
                    type="password" 
                    placeholder='senha'
                    disabled={disabled}
                    onChange={(e) => setUserData({...userData, password:e.target.value})} 
                />
                <input 
                    value={userData.name}
                    type="text" 
                    placeholder='nome'
                    disabled={disabled}
                    onChange={(e) => setUserData({...userData, name:e.target.value})} 
                />
                <input 
                    value={userData.image}
                    type="text" 
                    placeholder='foto' 
                    disabled={disabled}
                    onChange={(e) => setUserData({...userData, image:e.target.value})}  
                />
                <button onClick={handleSubmit} type="submit">
                    {disabled ? 
                        <Loader
                            type="ThreeDots"
                            color="#FFF"
                            height={13}
                            width={51}
                        /> : "Cadastrar"
                    }
                </button>
            </Form>
            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
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

        color: #DBDBDB
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
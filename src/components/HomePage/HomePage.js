/* import { useState } from 'react' */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

export default function HomePage() {
    /* const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') */

    return(
        <Container>
            <img src={logo} alt="" />
            <Form>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <button type="submit">Entrar</button>
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
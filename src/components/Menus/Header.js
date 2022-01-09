import styled from "styled-components"
import { Context } from "../../Context/AuthContext";
import { useContext } from "react";
import logoMini from '../../assets/logo-mini.png'

export default function Header() {

    const { userData } = useContext(Context)

    return (
        <HeaderComponent>
            <img src={logoMini} alt="" />
            <img src={userData.image} alt="" />
        </HeaderComponent>
    )
}

const HeaderComponent = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 18px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img:nth-child(2){
        height: 51px;
        width: 51px;
        border-radius: 50%;
    }
`
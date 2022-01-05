import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profilePic from '../../assets/profile-pic.png'
import logoMini from '../../assets/logo-mini.png'

export default function History() {
    return(
        <Container>
            <Header>
                <img src={logoMini} alt="" />
                <img src={profilePic} alt="" />
            </Header>
            <Content>
                <ContentHeader>
                    <span>Histórico</span>
                </ContentHeader>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <Footer>
                <span>Hábitos</span>
                <ProgressBarContainer>
                    <CircularProgressbar
                        value={"66"}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </ProgressBarContainer>
                <span>Histórico</span>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    min-width: 100vw;

    background-color: #E5E5E5;
`

const Header = styled.div`
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
`

const Footer = styled.div`
    width: 100%;
    height: 75px;

    position: fixed;
    bottom: 0;
    left: 0;

    background-color: #FFFFFF;

    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
`

const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;

    margin-bottom: 40px;
`

const Content = styled.div`
    width: 100%;

    margin-top: 70px;

    padding-left: 17px;
    padding-right: 17px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`

const ContentHeader = styled.div`
    width: 100%;
    height: 74px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    span{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
`
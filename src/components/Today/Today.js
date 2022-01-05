import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import checkIcon from '../../assets/check-icon.png'
import profilePic from '../../assets/profile-pic.png'
import logoMini from '../../assets/logo-mini.png'

export default function Today() {

    return(
        <Container>
            <Header>
                <img src={logoMini} alt="" />
                <img src={profilePic} alt="" />
            </Header>
            <Content>
                <ContentHeader>
                    <span>Segunda, 17/05</span>
                    <p>Nenhum hábito concluído hoje</p>
                </ContentHeader>
                <HabitCard>
                    <HabitCardText>
                        <span>Ler 1 capítulo de livro</span>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitCardText>
                    <button><img src={checkIcon} alt="" /></button>
                </HabitCard>
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
    height: 107px;

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

    button{
        width: 40px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 26.976px;
        line-height: 35px;
        text-align: center;

        color: #FFFFFF;
        
        padding: 0;
        margin-bottom: 5px;
    }
`

const HabitCard = styled.div`
    width: 100%;
    height: 94px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FFFFFF;

    border-radius: 5px;

    padding-right: 13px;

    button {
        width: 69px;
        height: 69px;

        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`

const HabitCardText = styled.div`
    
    padding: 13px 0 17px 15px;

    span{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }
`
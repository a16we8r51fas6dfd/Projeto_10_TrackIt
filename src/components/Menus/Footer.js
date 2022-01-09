import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function Menu() {

    const navigate = useNavigate();

    return (
        <Footer>
            <span onClick={() => navigate('/habitos')}>Hábitos</span>
            <ProgressBarContainer onClick={() => navigate('/hoje')}>
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
            <span onClick={() => navigate('/historico')}>Histórico</span>
        </Footer>
    )
}

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
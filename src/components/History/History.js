import styled from "styled-components";
import Menu from "../Menus/Footer";
import Header from "../Menus/Header";

export default function History() {
    return(
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <span>Histórico</span>
                </ContentHeader>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    min-width: 100vw;

    background-color: #E5E5E5;
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
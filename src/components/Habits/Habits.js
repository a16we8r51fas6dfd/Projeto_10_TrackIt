import styled from "styled-components";
import { Context } from "../../Context/AuthContext";
import { useContext } from "react";
import Menu from "../Menus/Footer";
import Header from "../Menus/Header";

export default function Habits() {

    const { token, userData } = useContext(Context)
    
    return(
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <span>Meus Hábitos</span>
                    <button> + </button>
                </ContentHeader>
                <CreateHabitCard>
                    <input type="text" placeholder="nome do hábito" />
                    <DaysButtons>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </DaysButtons>
                    <CreateButton>
                        <span>Cancelar</span>
                        <button onClick={() => console.log(token, userData)}>Salvar</button>
                    </CreateButton>
                </CreateHabitCard>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Content>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);;
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

        margin-top: 29px;
    }
`

const ContentHeader = styled.div`
    width: 100%;
    height: 77px;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

const CreateHabitCard = styled.div`
    width: 100%;
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #FFFFFF;
    border-radius: 5px;

    padding: 18px 18px 15px 18px;

    input {
        width: 100%;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
        
        padding-left: 11px;
    }
`

const DaysButtons = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 4px;

    margin-top: 10px;

    button{
        height: 30px;
        width: 30px;

        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }
`

const CreateButton = styled.div`
    width: 100%;

    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: right;
    gap: 23px;

    span{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        color: #52B6FF;
    }

    button{
        width: 84px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        color: #FFFFFF;
    }
`
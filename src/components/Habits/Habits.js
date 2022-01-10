import styled from "styled-components";
import { Context } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import Menu from "../Menus/Footer";
import Header from "../Menus/Header";
import axios from "axios";
import { useState } from "react";
import Delete from '../../assets/delete.png'

export default function Habits() {

    const { token } = useContext(Context)
    const [habits, setHabits] = useState([])
    const [habitName, setHabitName] = useState('')
    const [habitDays, setHabitDays] = useState([])
    const [creatingHabit, setCreatingHabit] = useState(false)
    const [pageReload, setPageReload] = useState(false)
    
    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promisse.then(response => {
            setHabits(response.data)
            setPageReload(false)
        })
        promisse.catch(error => {
            console.log(error.data)
        })
    }, [token, pageReload])

    function createHabit() {
        const habit = {
            name: habitName,
            days: habitDays
        }
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habit, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        promisse.then(response => {
            setHabitDays([])
            setHabitName('')
            setCreatingHabit(false)
            setPageReload(true)
        })
        promisse.catch(error => {
            alert(error.message)
        })
    }

    function handleClick(e) {
        e.preventDefault()

        if(habitDays.includes(e.target.value) === false) {
            setHabitDays([...habitDays, e.target.value])
        } else {
            const filteredDays = habitDays.filter(day => day !== e.target.value)
            setHabitDays(filteredDays)
        }
    }

    function deleteHabit(id) {
        if(window.confirm("Deletar hábito? Tem certeza? Mesmo?")) {
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            promisse.then(alert('Hábito deletado.'), setPageReload(true))
            promisse.catch(error => alert(error.message))
        } else {
            alert("Hábito não deletado.")
        }

    }
    
    return(
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <span>Meus Hábitos</span>
                    <button onClick={() => setCreatingHabit(true)}> + </button>
                </ContentHeader>
                { creatingHabit === true ? 
                    <CreateHabitCard>
                        <input
                            value={habitName} 
                            type="text" 
                            placeholder="nome do hábito"
                            onChange={(e) => setHabitName(e.target.value)}
                        />
                        <DaysButtons>
                            <Buttons testezinho={habitDays.includes('0') ? 'true' : 'false'} value={0} onClick={handleClick}>D</Buttons>
                            <Buttons testezinho={habitDays.includes('1') ? 'true' : 'false'} value={1} onClick={handleClick}>S</Buttons>
                            <Buttons testezinho={habitDays.includes('2') ? 'true' : 'false'} value={2} onClick={handleClick}>T</Buttons>
                            <Buttons testezinho={habitDays.includes('3') ? 'true' : 'false'} value={3} onClick={handleClick}>Q</Buttons>
                            <Buttons testezinho={habitDays.includes('4') ? 'true' : 'false'} value={4} onClick={handleClick}>Q</Buttons>
                            <Buttons testezinho={habitDays.includes('5') ? 'true' : 'false'} value={5} onClick={handleClick}>S</Buttons>
                            <Buttons testezinho={habitDays.includes('6') ? 'true' : 'false'} value={6} onClick={handleClick}>S</Buttons>
                        </DaysButtons>
                        <CreateButton>
                            <span onClick={() => setCreatingHabit(false)}>Cancelar</span>
                            <button onClick={createHabit}>Salvar</button>
                        </CreateButton>
                    </CreateHabitCard>
                :
                    <></>
                }
                { habits.length === 0 ?
                    <>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </>
                :
                    habits.map( habit =>
                            <HabitCard key={habit.id}>
                                <HabitCardHeader>
                                    <p>{habit.name}</p>
                                    <img onClick={() => deleteHabit(habit.id)} src={Delete} alt="delete"/>
                                </HabitCardHeader>
                                <DaysButtons>
                                    <Buttons testezinho={habit.days.includes(0) ? 'true' : 'false'} value={0}>D</Buttons>
                                    <Buttons testezinho={habit.days.includes(1) ? 'true' : 'false'} value={1}>S</Buttons>
                                    <Buttons testezinho={habit.days.includes(2) ? 'true' : 'false'} value={2}>T</Buttons>
                                    <Buttons testezinho={habit.days.includes(3) ? 'true' : 'false'} value={3}>Q</Buttons>
                                    <Buttons testezinho={habit.days.includes(4) ? 'true' : 'false'} value={4}>Q</Buttons>
                                    <Buttons testezinho={habit.days.includes(5) ? 'true' : 'false'} value={5}>S</Buttons>
                                    <Buttons testezinho={habit.days.includes(6) ? 'true' : 'false'} value={6}>S</Buttons>
                                </DaysButtons>
                            </HabitCard>
                    )
                }
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
    padding-bottom: 110px;

    padding-left: 17px;
    padding-right: 17px;

    display: flex;
    flex-direction: column;
    gap: 10px;

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

        color: #666666;
        
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

    `
const Buttons = styled.button `
    height: 30px;
    width: 30px;

    background-color: ${ ({testezinho}) => testezinho === 'true' ? '#CFCFCF' : '#FFFFFF' };
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;

    color: ${ ({testezinho}) => testezinho === 'true' ? '#FFFFFF' : '#DBDBDB' };
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

const HabitCard = styled.div`
    width: 100%;
    height: 91px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #FFFFFF;
    border-radius: 5px;

    padding: 13px 10px 15px 14px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }
`

const HabitCardHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    img {
        height: 15px;
        width: 13px;
    }
`
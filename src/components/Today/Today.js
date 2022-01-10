import styled from "styled-components";
import checkIcon from '../../assets/check-icon.png'
import Menu from "../Menus/Footer";
import Header from "../Menus/Header";
import { Context } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import * as dayjs from 'dayjs';

export default function Today() {

    require('dayjs/locale/pt-br')

    let day = dayjs().locale('pt-br').format(`dddd, DD/MM`)

    const { token , progress,  setProgress } = useContext(Context)
    const [habits, setHabits] = useState([])
    const [habitsCount, setHabitsCount] = useState(0)

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promisse.then(response => {
            setHabits(response.data)
        })
        promisse.catch(error => {
            console.log(error.data)
        })
    }, [habits, token])

    useEffect(() => {
        let count = 0

        habits.forEach( habit => {
            if(habit.done === true) {
                count ++
            }
        } )

        setProgress((count/habits.length)*100)
    }, [habits, setProgress])

    function handleCheck(id, done) {

        console.log(id)
        if(done === false) {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            promisse.then(
                setHabitsCount(habitsCount + 1)
            )
            promisse.catch(error => alert(error.message))
        } else {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            promisse.then(setHabitsCount(habitsCount - 1))
            promisse.catch(error => alert(error.message))
        }
    }

    return(
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <span>{day}</span>
                    {progress === 0 || habits.length ===0 ?
                        <HabitText>Nenhum hábito concluído ainda</HabitText>
                    :
                        <HabitText progressChecker={progress === 100 ? true : false}>{parseInt(progress)}% dos hábitos concluídos</HabitText>
                    }
                </ContentHeader>
                {habits.length === 0 ?
                    <></>
                :
                    habits.map(habit =>
                        <HabitCard key={habit.id}>
                            <HabitCardText>
                                <HabitTitle>{habit.name}</HabitTitle>
                                <Sequence>Sequência atual: 
                                    <SequenceSpan sequenceChecker={habit.currentSequence === habit.highestSequence && habit.currentSequence !== 0 ? true : false}>
                                        {habit.currentSequence} {habit.currentSequence > 1 ? 'dias' : 'dia'}
                                    </SequenceSpan>
                                </Sequence>
                                <Sequence>Seu recorde: 
                                    <SequenceSpan sequenceChecker={habit.done}>
                                        {habit.highestSequence} {habit.highestSequence > 1 ? 'dias' : 'dia'}
                                    </SequenceSpan>
                                </Sequence>
                            </HabitCardText>
                            <Checkbox buttonChecker={habit.done} onClick={() => handleCheck(habit.id, habit.done)}><img src={checkIcon} alt="" /></Checkbox>
                        </HabitCard>
                )}
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
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 70px;
    
    padding-bottom: 90px;
    padding-left: 17px;
    padding-right: 17px;
`

const HabitText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;

    color: ${ ({progressChecker}) => progressChecker === true ? '#8FC549' : '#666666'};
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
`

const Checkbox = styled.button `
    width: 69px;
    height: 69px;

    background: ${ ({buttonChecker}) => buttonChecker === true ? '#8FC549' : '#EBEBEB' };
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`

const HabitCardText = styled.div`
    
    padding: 13px 0 17px 15px;

    
`

const HabitTitle = styled.div`
    margin-bottom: 7px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
`

const Sequence = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
`
const SequenceSpan = styled.span`
    margin-left: 3px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    
    color: ${ ({sequenceChecker}) => sequenceChecker === true ? '#8FC549' : '#666666'};
`
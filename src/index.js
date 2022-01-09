import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SingUp from './components/SignUp/SignUp'
import Habits from './components/Habits/Habits'
import Today from './components/Today/Today'
import History from './components/History/History'
import './styles/reset.css'
import './styles/style.css'
import { AuthProvider } from "./Context/AuthContext"

function App() {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<HomePage />}/>
                    <Route exact path='/cadastro' element={<SingUp />} />
                    <Route exact path='/habitos' element={<Habits />} />
                    <Route exact path='/hoje' element={<Today/>} />
                    <Route exact path='/historico' element={<History/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))
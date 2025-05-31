import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


export default function App(){

    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home link={Link} />}/>
                <Route path='/about' element={<About link={Link}/>}/>
            </Routes>
        </BrowserRouter>
    )
}


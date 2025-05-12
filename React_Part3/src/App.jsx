import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
import Main from './components/main.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <Header />
        <Main />
    </>
)
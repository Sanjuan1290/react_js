
import { createRoot } from 'react-dom/client'
import icon from './assets/icon.png'

function Header(){
    return(
        <img src={icon} alt="React Logo" width='40px' />
    )
}

function Main(){
    return(
        <>
            <h1>sadfffff</h1>

            <ol>
                <li>dsafasdfdasfasdsfda</li>
                <li>dsafasdfdsdafasdgfdseasfasdsfda</li>
                <li>dsafasdfdadsaasfasdsfda</li>
                <li>dsaasdfsadasdfdasfasdsfda</li>
            </ol>
        </>
    )
}

function Footer(){
    return(
        <>
            ©️ 2024 San Juan development. ALl right reserved.
        </>
    )
}

function Page(){
    return(
        <>
            <Header/>
            <Main />
            <Footer />
        </>
    )
}


createRoot(document.querySelector('#root')).render(
    <>
        <Page />
    </>
)

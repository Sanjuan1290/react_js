
import { createRoot } from 'react-dom/client'
import logo from './assets/icon.png'

function RenderHeader(){
    return(
        <main>
            <img src={logo} alt="Reach Logo" width="40px" />

            <h1>I'm Exited because I currently moving forward 🧒</h1>
        </main>
    )
}

function CustomPage(){
    return(
        <ol>
            <li>For Creating Website</li>
            <li>For Personal Portfolio</li>
            <li>More Indemand than other framework 🧒</li>
            <li>For Future</li>
        </ol>
    )
}

function RenderFooter(){
    return(
        <small>©️ 2025 San Juan development. All rights reserved.</small>
    )
}

createRoot(document.querySelector('#root')).render(
    <>
        <RenderHeader />
        <CustomPage />
        <RenderFooter />
    </>
)
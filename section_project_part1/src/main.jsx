
import { createRoot } from 'react-dom/client'
import  icon  from './assets/icon.png'

function RenderMain(){

    return (
        <main>
            <img src={icon} className='react-logo'/>
            
            <section className='content-container'>

                <h1>Fun facts about React</h1>

                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </section>
        </main>
    )
}

createRoot(document.querySelector('#root')).render(
    <RenderMain />
)
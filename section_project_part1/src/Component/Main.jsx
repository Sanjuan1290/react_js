import icon from '../assets/logo.png'

export default function (){

    return(
        <main>

            <h1>Fun facts about React</h1>

            <ul className="main_list-container">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

            <img src={icon} alt="react logo" className='background-logo'/>
        </main>
    )
}
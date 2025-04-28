
import icon from './assets/icon.png'

function Header(){
    return(
        <header>
            <img className="logo" src={icon} alt="React Logo"/>                              

            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
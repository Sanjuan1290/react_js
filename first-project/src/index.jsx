
import { createRoot } from "react-dom/client"

function RenderText(){
    return (
        <h1 className="header">Hello World!</h1>
    )
}

const root_elem = document.querySelector('#root')

const newDiv = document.createElement('h1')
newDiv.innerText = "Heelo bossing"
newDiv.classList.add('header')
root_elem.appendChild(newDiv)



createRoot(root_elem).render(
    <RenderText />
)
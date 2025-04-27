import { createRoot } from 'react-dom/client'
import RenderNavbar from './navBar.jsx'

createRoot(document.querySelector('#root'))
.render(
    <div>
        <RenderNavbar />
    </div>
)
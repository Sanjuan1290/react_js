
import { createRoot } from 'react-dom/client'

import Header from './component/Header.jsx'
import Main from './component/Main.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <Header />
        <Main />
    </>
)
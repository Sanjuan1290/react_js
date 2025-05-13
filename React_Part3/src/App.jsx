import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
import Main from './components/main.jsx'

import { Practice } from './components/practice.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <Header />
        <Main />
        <Practice />
    </>
)
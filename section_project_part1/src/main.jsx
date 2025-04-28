
import { createRoot } from 'react-dom/client'
import Header from './header.jsx'
import { Main } from './mainContent.jsx'
import { Footer } from './footer.jsx'




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

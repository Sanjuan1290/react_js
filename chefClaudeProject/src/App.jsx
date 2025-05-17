import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import IngredientsSection from './components/IngredientsSection.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <Header />
        <IngredientsSection />
    </>
)
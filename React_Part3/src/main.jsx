import { createRoot } from 'react-dom/client'
import { TogglingState } from './components/TogglingState.jsx'
import { ArrayState } from './components/Arrays.jsx'
import Objects from './components/Objects.jsx'

createRoot(document.querySelector('#root')).render(

    <>
        {/* <TogglingState /> */}
        {/* <ArrayState /> */}
        <Objects />
    </>
)
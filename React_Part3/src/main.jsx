import { createRoot } from 'react-dom/client'
import { TogglingState } from './components/TogglingState.jsx'
import { ArrayState } from './components/Arrays.jsx'
import Objects from './components/Objects.jsx'
import Forms from './components/Forms.jsx'
import ConditionalRendering from './components/ConditionalRendering.jsx'

createRoot(document.querySelector('#root')).render(

    <>
        {/* <TogglingState /> */}
        {/* <ArrayState /> */}
        {/* <Objects /> */}
        {/* <Forms /> */}

        <ConditionalRendering />

    </>
)
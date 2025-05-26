import { createRoot } from 'react-dom/client'

import FetchData from './component/fetchData.jsx'
import WindowTrackerApp from './component/WindowTrackerApp.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        {/* <FetchData /> */}

        <WindowTrackerApp />
    </>
)
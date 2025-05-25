import { createRoot } from 'react-dom/client'

import FetchData from './component/fetchData.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <FetchData />
    </>
)
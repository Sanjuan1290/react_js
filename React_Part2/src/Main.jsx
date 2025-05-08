import { createRoot } from 'react-dom/client'
import { Header } from './component/Header.jsx'
import { Article } from './component/Article.jsx'

import globeImg from './assets/globe.png'

import mountFujiImage from '../public/mountFuji.png';
import locationIcon from '../public/location.png'

createRoot(document.querySelector('#root')).render(
    <>
        <Header 
            img={{
                    src: globeImg,
                    alt: 'globeImg'
                }
            }

        />

        <Article 
            img={
               {
                    mountFujiImg: {
                        src: mountFujiImage,
                        alt: 'Mount Fuji Image'
                    },

                    location: {
                        src: locationIcon,
                        alt: 'location Icon'
                    }
               }
            }
        />
    </>
)
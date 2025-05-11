import { createRoot } from 'react-dom/client'
import { Header } from './component/Header.jsx'
import { Article } from './component/Article.jsx'

import globeImg from './assets/globe.png'

import mountFujiImage from '/mountFuji.png';
import locationIcon from '/location.png'

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


const pokemons = ["Bulbassaur", "Charmander", "Squirtle"]

const result = pokemons.map(pokemon => `<p>${pokemon}<p>`)

console.log(result);
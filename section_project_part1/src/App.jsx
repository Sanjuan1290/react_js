import { createRoot } from 'react-dom/client'
import Joke from './components/joke.jsx'

createRoot(document.querySelector('#root')).render(
    <>
        <Joke setup="WHY DID THE DEVELOPER GO BROKE?" punchline="BECAUSE HE USED UP ALL HIS CACHE."/>
        <Joke setup="WHAT DID ONE HTML TAG SAY TO THE OTHER?" punchline="I REALLY FEEL LIKE YOU’RE OPENING UP TO ME."/>
        <Joke setup="WHY DON’T SKELETONS FIGHT EACH OTHER?" punchline="THEY DON’T HAVE THE GUTS."/>
        <Joke setup="BECAUSE THE WIFI SIGNAL WAS STRONGER IN THE FRIDGE." />
        <Joke setup="I TOLD MY COMPUTWER I NEEDED A BREAK — IT CRASHED." />
    </>
)
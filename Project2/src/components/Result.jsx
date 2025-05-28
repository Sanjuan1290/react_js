

export default function(props){

    return(
        <section className={`result-container ${
            props.gameResult === "win" ? 'win' : 
            props.gameResult === "loss" ? 'loss':
            null}`} >

            {
                props.gameResult === "win" ? <h3>You win!</h3> : <h3>Game over!</h3>
            }
            {
                props.gameResult === "win" ? <p>Well done!🎉</p> : <p>You lose! Better start learning Assembly 😫</p>
            }
        </section>
    )
}
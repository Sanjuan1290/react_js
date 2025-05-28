

export default function(props){

    const wordToGuess_Letters = props.answerWord.split('')

    const generate_Letter_containers = wordToGuess_Letters.map((letter, index) => {
        return <div key={index}>
            <p>{letter}</p>
        </div>
    })

    return(
        <section className="answer-container">
            {
                generate_Letter_containers
            }
        </section>
    )
}
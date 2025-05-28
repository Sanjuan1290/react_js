

export default function(props){

    const allLanguage = props.languages.map(language => {
        return <div key={language.name} >
            <button 
            style={{
                backgroundColor: language.backgroundColor,
                opacity: `${language.isAlive ? 1 : .4}`
            }}>

                {language.name}
            </button>
            
                {!language.isAlive ? <p>💀</p> : null}
        </div>
    })

    return(
        <section className="languanges-container">
            {
                allLanguage
            }
        </section>
    )
}
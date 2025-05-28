

export default function(){

    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    const generateKey_Container = keys.map(key => (
        <div key={key}>
            <button>{key}</button>
        </div>
    ))

    return(
        <section className="input-container">
            {
                generateKey_Container
            }
        </section>
    )
}
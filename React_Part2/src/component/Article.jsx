


export function Article(props){
    const ninjaTurtle = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    const ninjaTurtleH2 = ninjaTurtle.map(ninjaName => <h2>{ninjaName}</h2>)
    return(
        <article>
            <img src={props.img.mountFujiImg.src} alt={props.img.mountFujiImg.alt} />

            <section>
                <div className="country">
                    <img src={props.img.location.src} alt={props.img.location.alt} />

                    <p>JAPAN</p>
                    <a>View on Google Maps</a>
                </div>

                <h2>MOUNT FUJI</h2>

                <h4>12 Jan, 2021 - 24 Jan, 2021</h4>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quo voluptatum dolorum quas molestiae, modi nemo incidunt veritatis animi totam est deserunt explicabo dolore, officiis rem, itaque cupiditate. Explicabo, hic?</p>
            </section>

            {ninjaTurtleH2}
        </article>
    )
}
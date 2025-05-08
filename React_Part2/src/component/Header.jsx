
export function Header(props){
    return(
        <header>
            <img src={props.img.src} alt={props.img.alt} />

            <p>my travel journal.</p>
        </header>
    )
}
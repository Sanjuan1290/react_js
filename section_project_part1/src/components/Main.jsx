import { datas } from '../contentData.js'

export default function() {
    return (
        <main>
            {datas.map(data => ( 
                <div className="content-container" key={data.id}>
                    <img src={data.image} alt="mount fuji" />

                    <div className="content">
                        <div className="location">
                            <img src="./public/location.png" alt="location icon" />
                            <p>{data.location.country}</p>

                            <a href="#">View on Google Maps</a>
                        </div>

                        <h3>{data.location.city}</h3>

                        <p className="date">{data.date}</p>

                        <small>{data.content}</small>
                    </div>
                </div>
            ))}
        </main>
    )
}

import { useState } from "react";


export default function(){

    const [products, setProducts] = useState([
    {
        id: 1,
        name: 'hatdog'
    },
    {
        id: 2,
        name: 'cheese'
    }
])

    async function showData(){
        
        const res = await fetch('https://supersimplebackend.dev/products')

        const data = await res.json()

        console.log(data);

        setProducts(prev => ([
            ...prev,
            data
        ]))
    }

    return(
        <div>

            <button onClick={showData}>sdf</button>
            {
                products.map(product => {
                    return <p key={product.id}>{JSON.stringify(product)}</p>
                })
            }
            
        </div>
    )
}
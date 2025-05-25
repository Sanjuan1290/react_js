import { useState, useEffect } from "react";


export default function(){

    const [count, setCount] = useState(0)

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

    useEffect(()=>{
        showData()
    }, [count])


    console.log('rendered');


    return(
        <div>

            <button onClick={() => {setCount(prev => prev + 1)}}>{count}</button>
            {
                products.map(product => {
                    return <p key={product.id}>{JSON.stringify(product)}</p>
                })
            }
            
        </div>
    )
}
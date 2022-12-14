import { useEffect, useState } from "react";

const SneakerGallery = () => {
    
    const [sneakers, setSneakers] = useState(null)

    useEffect(() => {
      const fetchSneakers = async () => {
        const response = await fetch(`/sneakers/`)
        const json = await response.json()
        if (response.ok) {
          setSneakers(json)
        }
      }
  
      fetchSneakers()
    }, [])

    return (
        <div className="flex-container">
            {/* <h1>Sneakers</h1>
            <br />     */}
            {
                sneakers && sneakers.map((sneaker) => (
                    <div className="sneaker-details" >
                        <div className="sneaker-boxes">
                            {/* <a href={`/places/${sneakers.id}`}> */}
                                <h3>{sneaker.name}</h3>
                            {/* </a> */}
                            <p>{sneaker.brand}</p>
                            <img src={sneaker.image} alt='sneaker' />
                            <p>{sneaker.comment}</p>
                            <p>-Hypebeast</p>                       
                        </div>      
                        <br/>
                        <br/>
                    </div>
                ))
            }
        </div>
    )

}


export default SneakerGallery
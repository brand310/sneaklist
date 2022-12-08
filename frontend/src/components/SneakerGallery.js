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
            <h1>Sneakers</h1>            
            {
                sneakers && sneakers.map((sneaker) => (
                    <div className="sneaker-details" >
                        <h3>{sneaker.name}</h3>
                        <p>{sneaker.brand}</p>
                        <img src={sneaker.image} alt='sneaker' />            
                        <br />            
                    </div>
                ))
            }
        </div>
    )

}


export default SneakerGallery
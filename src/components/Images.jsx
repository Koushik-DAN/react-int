import { useEffect, useState } from "react"

const Images = () => {
    const [image, setImage] = useState([])
    const [isLoading,setIsLoading] = useState(false)

const getAllImage = async ()=>{
    try {
        setIsLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/photos')
        .then (res=>res.json())
        .then (data=> setImage(data) )
        
    } catch (error) {
        console.log('error')  
    }finally{
        setIsLoading(false)
    }
}



useEffect (()=>{
    getAllImage()
}, []
)

console.log (image[0])

if(isLoading){
    return <p>Loading.....</p>
}

return <div>

{
    image.slice(0,10).map(i=> <div>
        <p>Image id: {i.id}</p>
        <p>Image title: {i.title}</p>
        {/* <img src={i.url} alt="" /> */}
    </div>)
}
</div>
}
export default Images;
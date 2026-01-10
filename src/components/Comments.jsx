import { useEffect, useState } from "react"

const Comments = () => {
    const [comments, setComments] = useState([])
    const [isLoading,setIsLoading] = useState(false)

const getAllComments = async ()=>{
    try {
        setIsLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/comments')
        .then (res=>res.json())
        .then (data=> setComments(data) )
        
    } catch (error) {
        console.log('error')  
    }finally{
        setIsLoading(false)
    }
}



useEffect (()=>{
    getAllComments()
}, []
)

if(isLoading){
    return <p>Loading.....</p>
}

return <div>

{
    comments.map(i=> <div>
        <p>Comments id: {i.id}</p>
        <p>Comments name: {i.name}</p>
    </div>)
}
</div>
}
export default Comments;
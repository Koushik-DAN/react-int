import { useEffect, useState } from "react"
import { useParams } from "react-router"

const PostDetails = () => {
    const {postId} = useParams()
    const [postDetails,setPostDetails] = useState({})
   const getPostDetails = async () => {
    try {
         fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(postId)}`)
        .then (res=> res.json())
        .then (data=> setPostDetails(data))
    } catch (error) {
        
    }
   }

   useEffect(()=>{
    getPostDetails()
   },[])

   console.log("poset details=====>", postDetails);
   
    return <>
    <p>Details : {postDetails.body}</p>
    </>
}

export default PostDetails
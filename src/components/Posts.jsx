import { useEffect, useState } from "react"
import { useNavigate, useNavigation } from "react-router";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const navigate = useNavigate()
    const getAllPosts = async () => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=> setPosts(data))
        } catch (error) {
            console.log(error);
        }

    }
const [users, setUsers]= useState ([])
const getAllUsers =async ()=> {
    try {
        await fetch ('https://jsonplaceholder.typicode.com/users')
    
        .then (res=>(res.json()))
        .then (data=> setUsers (data))

    } catch (error) {
        console.log ('error');
    }

}


let [rerun,setRerun] = useState(1)
    useEffect(()=>{
        getAllPosts()
        getAllUsers()
    },[])
    console.log("users=====>",users);
    console.log("posts=====>",posts);
    return <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
        {
            posts.map(item=> <div><p>Post id: {item.id}</p> <p>Post title{item.title}</p> <button onClick={()=>{
                navigate(`${item.id}`)
            }}>View details</button></div>)
        }

        <button onClick={()=> setRerun(++rerun)}>Run again</button>
    </div>
}

export default Posts
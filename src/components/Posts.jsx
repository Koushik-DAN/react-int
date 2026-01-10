import { useEffect, useState } from "react"

const Posts = () => {
    const [posts,setPosts] = useState([]);

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
    return <div>
        {
            posts.map(item=> <p>{item.id}</p>)
        }

        <button onClick={()=> setRerun(++rerun)}>Run again</button>
    </div>
}

export default Posts
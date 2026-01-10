import { useEffect, useState } from "react"

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [isLoading,setIsLoading] = useState(false)

const getAllTodos = async ()=>{
    try {
        setIsLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/todos')
        .then (res=>res.json())
        .then (data=> setTodos(data) )
        
    } catch (error) {
        console.log('error')  
    }finally{
        setIsLoading(false)
    }
}



useEffect (()=>{
    getAllTodos()
}, []
)

if(isLoading){
    return <p>Loading.....</p>
}

return <div>

{
    todos.map(i=> <div>
        <p>Todos  id: {i.id}</p>
        <p>Todos Title: {i.title}</p>
    </div>)
}
</div>
}
export default Todos
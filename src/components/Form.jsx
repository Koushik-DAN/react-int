import { useState } from "react"

const Form = () => {
    const [name,setName] = useState('')
    const [age,setAge] = useState(null)



    const handleFormSubmit = (event) => {
        event.preventDefault()

        console.log("name=====>", name);
        console.log("age=====>", age);
    }

    // console.log(name);
    return <>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={(event)=>setName(event.target.value)} type="text" id="name" placeholder="enter your name, eg John"/>
        <label htmlFor="age">Age</label>

        <input onChange={(event)=>setAge(event.target.value)} type="number" id="age" placeholder="enter your age, eg 18"/>

        <button type="submit">Submit</button>
    </form>
    </>
}

export default Form
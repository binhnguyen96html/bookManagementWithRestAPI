import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BookNew = () => {
    const [title1, setTitle] = useState('')
    let navigate = useNavigate();


    const handleChange = (e) =>{
        setTitle({
            ...title1,
            [e.target.name]: e.target.value
        })
    }

    const postBook = (e) =>{
        e.preventDefault();
        const title = title1.title;
        const quantity = title1.quantity;
        axios.post('http://localhost:3000/books', {title, quantity})
        .then(res => {
            navigate('/');
            console.log("posting", res.data.data)
        })
        .catch(err => console.log(err))
    }



    return(

<div>
    <h1>Add a new Book</h1>

    <form onSubmit={(e)=>postBook(e)}>
        <div>
            <label>Title</label> <br></br>
            <input
            name="title" 
            onChange={(e)=>handleChange(e)}
            ></input>
        </div>

        <div>
            <label>Quantity</label> <br></br>
            <input 
            name="quantity"
            onChange={(e)=>handleChange(e)}
            ></input>
        </div>

        <button onClick={(e)=>postBook(e)}>Add</button>
    </form>
</div>

    )
}

export default BookNew;
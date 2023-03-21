import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookEdit = () => {
  const [book, setBook] = useState([]);
  const {state} = useLocation();
  
  
  let navigate = useNavigate();

  const handleEdit = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const editBook = (e) => {
    e.preventDefault();
    const title = book.title;
    const quantity = book.quantity;
    const id = e.target.id;

    axios
      .put(`http://localhost:3000/books/${id}`, { title, quantity })
      .then((res) => {
        navigate("/");
        console.log("edited", res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit for Book with ID: {state.iD} {state.value2}</h1>

      <form>
        {/* <div>
          <label>ID</label> <br></br>
          <input name="id" onChange={(e) => handleEdit(e)}></input>
        </div> */}

        <div>
          <label>Title</label> <br></br>
          <input name="title"  onChange={(e) => handleEdit(e)}></input>
        </div>

        <div>
          <label>Quantity</label> <br></br>
          <input name="quantity" onChange={(e) => handleEdit(e)}></input>
        </div>

        <button id={state.iD} onClick={(e) => editBook(e)}>Save</button>
      </form>

    </div>
  );
};

export default BookEdit;

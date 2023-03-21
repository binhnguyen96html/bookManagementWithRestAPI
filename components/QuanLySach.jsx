import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function QuanLySach() {
  const [book, setBook] = useState([]);
  //const [dele, setDele] = useState(1);
  let navigate = useNavigate();

  function navigateEdit(e) {
    navigate(`/bookEdit/${e.target.id}`, {state: {iD: e.target.value}});
  }
  function navigateNew() {
    navigate("/bookNew");
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((result) => {
        setBook(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBook = (e) => {
    const title = book.title;
    const quantity = book.quantity;
    const id = e.target.id;
    axios
      .delete(`http://localhost:3000/books/${id}`, { title, quantity })
      .then((res) => {
        alert("Delete successfully!");
        //setDele(dele+1)
        console.log("deleted", res.data.data);
      })
      .catch((err) => console.log(err));

  };

  // useEffect(() => {
    
  // }, [{dele}]);
  // console.log("rerender!")

  const displayBooks = book.map((item) => {
    return (
      <tr key={item.id} >
        <td style={{border: '1px solid black'}}>{item.id}</td>
        <td style={{border: '1px solid black'}} >{item.title}</td>
        <td style={{border: '1px solid black'}} >{item.quantity}</td>
        <td>
          <button value={item.id} id={item.id} onClick={(e)=>navigateEdit(e)}>Edit</button>
          <button id={item.id} onClick={deleteBook}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Library</h1>

      <button onClick={navigateNew}>Add a new Book</button>

      <table style={{border: '1px solid black', marginTop:15}}>
        <thead>
          <tr >
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{displayBooks}</tbody>
      </table>
    </div>
  );
}

export default QuanLySach;

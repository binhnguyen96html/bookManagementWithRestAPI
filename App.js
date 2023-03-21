
import QuanLySach from "./components/QuanLySach";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BookEdit from "./components/BookEdit";
import BookNew from "./components/BookNew";

function App() {
  return(
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuanLySach />}></Route>
      <Route path="/bookEdit/:iD" element={<BookEdit />}></Route>
      <Route path="/bookNew" element={<BookNew />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  ) 
}

export default App;

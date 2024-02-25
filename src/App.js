import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./assets/Create";
import Update from "./assets/Update";
import { Toaster } from "react-hot-toast";
// import Demo from "./assets/Demo";

function App() {
  return (
    <div className=" mt-5">
      {/* <Demo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}>
            {" "}
          </Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

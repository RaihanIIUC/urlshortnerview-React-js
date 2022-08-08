import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoginAction } from "./_Actions/UserAction";
import Login from "./Components/Login";
import { Home } from "./Components/Home";

function App() {
  const dispatch = useDispatch();

  const { error, currentUser } = useSelector((store) => store.userstore);

  console.log(currentUser, error, "ddd");

  useEffect(() => {
    dispatch(requestLoginAction());
  }, []);
  return (
    <div className="App">
      {/* <Link to="/contact">Hello</Link> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

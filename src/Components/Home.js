import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import MasterLayOut from "./MasterLayOut";

export const Home = () => {

  const { currentUser, error  , token , loggedIn } = useSelector((store) => store.userstore);

  return (
    <div>
      {
         loggedIn ?(  <MasterLayOut/>) : <Login /> 
      }

    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logout } from "../../features/authStoreSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logOutHandler=()=>{
    authservice.logout()
        .then(()=>{
            dispatch(logout());
        })
  }
  return (
    <button className="px-6 py-2 duration-300 hover:bg-blue-400 rounded-full hover:text-white cursor-pointer " onClick={logOutHandler}>LogOut</button>
  )
}

export default Logoutbtn;

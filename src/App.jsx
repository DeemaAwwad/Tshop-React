import React, { useEffect,useContext } from 'react'
import {RouterProvider} from "react-router-dom";
import {CartContextprovider } from './components/web/context/Cart';
import {router} from './layouts/Routes'
import { UserContext } from './components/web/context/User';

export default function App() {
  let {setUserToken} = useContext(UserContext);
  useEffect(()=>{
    if(localStorage.getItem("userToken") != null){
      setUserToken(localStorage.getItem("userToken"));
    }
  },[]);
  return (
      <CartContextprovider>
        <RouterProvider router={router} />
      </CartContextprovider>
  )
}
import React from 'react'
import Wnavbar from '../components/web/wnavbar/Wnavbar'
import Wfooter from '../components/web/wfooter/Wfooter'
import { Outlet } from 'react-router-dom'


export default function layout() {
  return (
    <>
    <Wnavbar/>
    <Outlet/>
    <Wfooter/>
    </>
  )
}

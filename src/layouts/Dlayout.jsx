import React from 'react'
import Dnavbar from '../components/dashboard/dnavbar/Dnavbar'
import Dfooter from '../components/dashboard/dfooter/Dfooter'
import { Outlet } from 'react-router-dom'

export default function Dlayout() {
  return (
    <>
      <Dnavbar/>
      <Outlet/>
      <Dfooter/>
    </>
  )
}

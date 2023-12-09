import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/User'

export default function Profile() {
    let{userData} = useContext(UserContext);
    console.log(userData);
 
if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.userName}</p>
      <p>Email: {userData.email}</p>
      <p>Role: {userData.role}</p>
      <p>Status:{userData.status} </p>
    </div>
  );
};

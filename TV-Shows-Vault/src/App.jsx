import React, {useState, useEffect} from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import PageHeader from './PageHeader'
import ShowDetails from './ShowDetails'
import PeopleDetails from './PeopleDetails'
import Signup from './signup/Signup'
import Login from './login/Login'
import Survey from './survey/Survey'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHeader />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/tvShows/:id",
        element: <ShowDetails />
      },
      {
        path: "/people",
        element: <PeopleDetails />
      },
      {
        path: "/signup",
        element: <Signup />
      },
       {
        path: "/login",
        element: <Login />
      },
        {
        path: "/survey",
        element: <Survey />
      }

    ]
  }
])

function App () {

  return (
    <RouterProvider router = {router} />
  )
}

export default App
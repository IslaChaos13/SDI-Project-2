import React, {useState, useEffect} from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import PageHeader from './PageHeader'
import ShowDetails from './ShowDetails'

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
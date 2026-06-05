import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import './App.css'

function PageHeader (){

    const [search, setSearch] = useState('')

    return (
        <>
        <div className='pageHeader'>
        <h2>Binge Master</h2>
        <input
            type='text'
            placeholder="Search"
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
            />
        <Outlet context={{ search }} />
        </div>
        </>
    )
}

export default PageHeader
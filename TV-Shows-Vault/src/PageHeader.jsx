import { useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

// import './App.css'

function PageHeader (){

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

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

        <button type="button" class="btn btn-secondary" onClick={() => {navigate('/people')}}>People</button>
        <button type="button" class="btn btn-secondary"onClick={() => {navigate('/survey')}}>Survey</button>

        <button type="button" class="btn btn-secondary"onClick={() => {navigate('/signup')}}>Sign-Up</button>

        </div>

        <Outlet context={{ search }} />
        </>
    )
}

export default PageHeader
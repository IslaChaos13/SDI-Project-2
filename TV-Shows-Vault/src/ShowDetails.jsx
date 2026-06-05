import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link, useParams } from 'react-router-dom'


import './App.css'

function ShowDetails () {
    const [show, setShow] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(json => setShow(json))
    }, [id])

    if (!show) return <h4>Loading show details...</h4>

    return (
        <>
            <div className = 'showDetails'>

                <div className = 'l-Details'>

                    <Link to='/'><button>Back</button></Link>
                    <h1>{show.name}</h1>
                    < img src = {show.image?.medium} alt={show.name} />
                    <p>Genres: {show.genres.join(' | ')}</p>
                    <p>Rating: {show.rating?.average ?? 'N/A'}</p>

                </div>

                <div className = 'r-Details'>
                    <p dangerouslySetInnerHTML = {{__html: show.summary}} />

                </div>
            </div>

        </>
    )
}

export default ShowDetails
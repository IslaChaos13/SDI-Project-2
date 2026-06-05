import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import './App.css'

function HomePage () {
    const { search } = useOutletContext()
    const [tvShows, setTVShows] = useState([])

    const url = 'https://api.tvmaze.com'
    const shows = `${url}/shows`

    const navigate = useNavigate()

    useEffect(() => {
        fetch(shows)
            .then(res => res.json())
            .then(json => setTVShows(json))
    }, [])

    const filterShows = tvShows.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className ='tvShows'>
            <h3>TV Shows</h3>
            <ul>
                {filterShows.map((t) => (
                    <li key={t.id}>
                    < img src = {t.image?.medium} alt={t.name}
                        onClick={() => {navigate(`/tvShows/${t.id}`)}}
                    />
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}

export default HomePage